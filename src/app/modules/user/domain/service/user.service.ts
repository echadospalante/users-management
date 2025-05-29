import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { AppRole, Pagination, User } from 'echadospalante-domain';

import UserCreateDto from '../../infrastructure/web/v1/model/request/user-create.dto';
import { OnboardingInfo } from '../core/onboarding';
import { UserFilters } from '../core/user-filters';
import { UserAMQPProducer } from '../gateway/amqp/user.amqp';
import { UsersRepository } from '../gateway/database/users.repository';
import { RolesService } from './role.service';

@Injectable()
export class UsersService {
  private readonly logger: Logger = new Logger(UsersService.name);

  public constructor(
    private rolesService: RolesService,
    @Inject(UsersRepository)
    private usersRepository: UsersRepository,
    @Inject(UserAMQPProducer)
    private userAMQPProducer: UserAMQPProducer,
  ) {}

  public getUsers(
    filters: UserFilters,
    pagination: Pagination,
  ): Promise<User[]> {
    return this.usersRepository.findAllByCriteria(filters, pagination);
  }

  public async getUserById(userId: string): Promise<User> {
    const user = await this.usersRepository.findById(userId);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  public async getUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  public async countUsers(filters: UserFilters): Promise<number> {
    return this.usersRepository.countByCriteria(filters);
  }

  public async saveUser(user: UserCreateDto): Promise<User> {
    const userDB = await this.usersRepository.findByEmail(user.email);

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
    const userRole = await this.rolesService.findByName(AppRole.USER);
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
      preferences: [],
      gender: 'M',
      birthDate: new Date(),
      comments: [],
      donations: [],
      notifications: [],
      publicationClaps: [],
      sponsorships: [],
      subscriptions: [],
      ventures: [],
    };
  }

  public async enableUser(userId: string): Promise<User | null> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.active) {
      throw new UnprocessableEntityException('User is already enabled');
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
    const user = await this.usersRepository.findById(userId);
    if (!user) throw new NotFoundException('User not found');

    if (!user.active)
      throw new UnprocessableEntityException('User is already disabled');

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

  public async verifyUser(id: string): Promise<User | null> {
    const user = await this.usersRepository.findById(id);
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

  public async unVerifyUser(id: string): Promise<User | null> {
    const user = await this.usersRepository.findById(id);
    if (!user) throw new NotFoundException('User not found');

    if (!user.verified)
      throw new BadRequestException('User is already unverified');

    const isAdmin = user.roles.some(({ name }) => name === AppRole.ADMIN);
    if (isAdmin)
      throw new ForbiddenException('Admin user cannot be unverified');

    return this.usersRepository.unVerifyAccount(user.email).then((userDB) => {
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
    console.log({ userId, image });
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

  public deleteById(email: string): Promise<void> {
    return this.usersRepository.deleteById(email);
  }

  public async updateRolesToUser(
    email: string,
    roles: AppRole[],
  ): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);
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

    await this.usersRepository.addUserRoles(email, addedRoles);
    await this.usersRepository.removeUserRoles(email, removedRoles);
    this.logger.log(`Roles updated for user ${email}`);
    this.userAMQPProducer.emitUserUpdatedEvent(user);
  }

  public async saveOnboarding(email: string, onboardingInfo: OnboardingInfo) {
    // return this.usersRepository.setOnboardingCompleted(userId);
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new NotFoundException('User not found');
    if (!user.active) throw new ForbiddenException('User is disabled');

    if (user.onboardingCompleted)
      throw new UnprocessableEntityException(
        'User already completed onboarding',
      );
    this.usersRepository.saveOnboarding(email, onboardingInfo);
  }

  public async refreshAuth(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new NotFoundException('User not found');
    if (!user.active) throw new ForbiddenException('User is disabled');
    return user;
  }

  public getAllRoles() {
    return this.rolesService.getRoles();
  }
}
