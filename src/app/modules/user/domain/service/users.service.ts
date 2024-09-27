import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import {
  AppRole,
  BasicType,
  ComplexInclude,
  Pagination,
  User,
} from 'echadospalante-core';

import UserCreateDto from '../../infrastructure/web/v1/model/request/user-create.dto';
import UserRegisterCreateDto from '../../infrastructure/web/v1/model/request/user-preferences-create.dto';
import { UserAMQPProducer } from '../gateway/amqp/user.amqp';
import { RolesRepository } from '../gateway/database/roles.repository';
import { UsersRepository } from '../gateway/database/users.repository';
import { UserFilters } from '../core/user-filters';

// export class LoginResponse {
//   firstName: string;
//   lastName: string;
//   picture: string;
//   email: string;
//   id: string;
//   roles: AppRole[];
//   active: boolean;
// }

@Injectable()
export class UsersService {
  private readonly logger: Logger = new Logger(UsersService.name);

  public constructor(
    @Inject(UsersRepository)
    private usersRepository: UsersRepository,
    @Inject(RolesRepository)
    private rolesRepository: RolesRepository,
    @Inject(UserAMQPProducer)
    private userAMQPProducer: UserAMQPProducer,
  ) {}

  public getUsers(
    filters: UserFilters,
    include: ComplexInclude<User>,
    pagination: Pagination,
  ): Promise<User[]> {
    return this.usersRepository.findAllByCriteria(filters, include, pagination);
  }

  public async getUserById(userId: string): Promise<User> {
    const user = await this.usersRepository.findById(userId, {
      comments: false,
      notifications: false,
      roles: true,
      ventures: false,
      detail: false,
      preferences: false,
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  public async getUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findByEmail(email, {
      comments: false,
      notifications: false,
      roles: true,
      ventures: false,
      detail: false,
      preferences: false,
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  public async countUsers(filters: Partial<BasicType<User>>): Promise<number> {
    return this.usersRepository.countByCriteria(filters);
  }

  public async saveUser(user: UserCreateDto): Promise<User> {
    const userDB = await this.usersRepository.findByEmail(user.email, {
      roles: true,
    });

    if (userDB && !userDB.active)
      throw new ForbiddenException('User is disabled');

    if (userDB) {
      this.userAMQPProducer.emitUserLoggedEvent(userDB);
      return userDB;
    }

    const userToSave: User = await this.buildUserToSave(user);

    return this.usersRepository.save(userToSave).then((savedUser) => {
      this.logger.log(`User ${userToSave.email} saved`);
      this.userAMQPProducer.emitUserCreatedEvent(savedUser);
      return savedUser;
    });
  }

  private async buildUserToSave(user: UserCreateDto): Promise<User> {
    const userRole = await this.rolesRepository.findByName(AppRole.USER);
    if (!userRole)
      return Promise.reject(new BadRequestException('Role not found'));
    return {
      ...user,
      active: true,
      verified: false,
      onboardingCompleted: false,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      roles: [userRole],
      notifications: [],
      preferences: [],
      ventures: [],
      comments: [],
    };
  }

  public async registerUser(
    email: string,
    detail: UserRegisterCreateDto,
  ): Promise<void> {
    const userDB = await this.usersRepository.findByEmail(email, {
      roles: true,
    });
    if (!userDB) throw new NotFoundException('User not found');

    this.usersRepository.updateDetail(email, detail);
    this.usersRepository.updatePreferences(email, detail.preferences);
    this.usersRepository.setOnboardingCompleted(email);
    this.userAMQPProducer.emitUserRegisteredEvent(userDB);
  }

  public async enableUser(userId: string): Promise<User | null> {
    const user = await this.usersRepository.findById(userId, { roles: true });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.active) {
      throw new BadRequestException('User is already enabled');
    }

    return this.usersRepository.unlockAccount(user.email).then((userDB) => {
      if (!userDB) {
        throw new BadRequestException('User could not be enabled');
      }
      this.userAMQPProducer.emitUserEnabledEvent(userDB);
      return userDB;
    });
  }

  public async disableUser(userId: string): Promise<User | null> {
    const user = await this.usersRepository.findById(userId, { roles: true });
    if (!user) throw new NotFoundException('User not found');

    if (!user.active) throw new BadRequestException('User is already disabled');

    const isAdmin = user.roles.some(({ name }) => name === AppRole.ADMIN);
    if (isAdmin) throw new ForbiddenException('Admin user cannot be disabled');

    return this.usersRepository.lockAccount(user.email).then((userDB) => {
      if (!userDB) {
        throw new BadRequestException('User could not be disabled');
      }
      this.userAMQPProducer.emitUserDisabledEvent(userDB);
      return userDB;
    });
  }

  public async verifyUser(email: string): Promise<User | null> {
    const user = await this.usersRepository.findByEmail(email, {});
    if (!user) throw new NotFoundException('User not found');

    if (user.verified)
      throw new BadRequestException('User is already verified');

    return this.usersRepository.verifyAccount(user.email).then((userDB) => {
      if (!userDB) {
        throw new BadRequestException('User could not be verified');
      }
      this.userAMQPProducer.emitUserVerifiedEvent(userDB);
      return userDB;
    });
  }

  public async unverifyUser(email: string): Promise<User | null> {
    const user = await this.usersRepository.findByEmail(email, { roles: true });
    if (!user) throw new NotFoundException('User not found');
    console.log({ USER: user });
    if (!user.verified)
      throw new BadRequestException('User is already unverified');

    const isAdmin = user.roles.some(({ name }) => name === AppRole.ADMIN);
    if (isAdmin)
      throw new ForbiddenException('Admin user cannot be unverified');

    return this.usersRepository.unverifyAccount(user.email).then((userDB) => {
      if (!userDB) {
        throw new BadRequestException('User could not be unverified');
      }
      this.userAMQPProducer.emitUserUnverifiedEvent(userDB);
      return userDB;
    });
  }

  public async updateUserImage(
    userId: string,
    image: { buffer: Buffer; mimetype: string },
  ): Promise<void> {
    return Promise.resolve();
    // const usersCache = await this.usersCache.getMany('betting_house_*');
    // const user = usersCache.find(({ id }) => {
    //   return id === userId;
    // });
    // if (!user) {
    //   throw new ConflictException('Betting house does not exists');
    // }
    // const { fullName } = user;
    // this.deleteUserImage(fullName);
    // const format = image.mimetype.split('/')[1];
    // const imagePath = `${this.BETTING_HOUSES_IMAGES_FOLDER}/${fullName}.${format}`;
    // mkdirSync(`${this.BETTING_HOUSES_IMAGES_FOLDER}`, { recursive: true });
    // writeFileSync(`${imagePath}`, image.buffer);
  }

  public deleteUserByEmail(email: string): Promise<void> {
    return this.usersRepository.deleteByEmail(email);
  }

  public getUserPreferences(userId: string) {
    return this.usersRepository
      .findById(userId, {
        preferences: true,
      })
      .then((user) => {
        if (!user) throw new NotFoundException('User not found');
        return user.preferences;
      });
  }

  public getRoles() {
    return this.rolesRepository.findAll({});
  }

  public async updateRolesToUser(
    email: string,
    roles: AppRole[],
  ): Promise<void> {
    const user = await this.usersRepository.findByEmail(email, { roles: true });
    if (!user) throw new NotFoundException('User not found');
    if (roles.includes(AppRole.ADMIN) || roles.includes(AppRole.USER))
      throw new BadRequestException('Admin or user role cannot be added');
    const baseRoles = user.roles.filter(
      ({ name }) => name === AppRole.ADMIN || name === AppRole.USER,
    );
    const addedRoles = roles.filter(
      (role) => !user.roles.some(({ name }) => name === role),
    );
    const removedRoles = user.roles
      .map(({ name }) => name)
      .filter((role) => !baseRoles.some(({ name }) => role === name))
      .filter((role) => !roles.some((name) => role === name));

    const rolesToAdd = await this.rolesRepository.findManyByName(addedRoles);
    const rolesToRemove =
      await this.rolesRepository.findManyByName(removedRoles);

    return Promise.all([
      this.usersRepository.addUserRoles(email, rolesToAdd),
      this.usersRepository.removeUserRoles(email, rolesToRemove),
    ]).then(() => {
      this.logger.log(`Roles updated for user ${email}`);
      this.userAMQPProducer.emitUserUpdatedEvent(user);
    });
  }
}
