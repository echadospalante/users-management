import {
  BadRequestException,
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
} from 'x-ventures-domain';

import { NotFoundError } from 'rxjs';
import { PrismaConfig } from '../../../../config/prisma/prisma.connection';
import UserCreateDto from '../../infrastructure/web/v1/model/request/user-create.dto';
import UserRegisterCreateDto from '../../infrastructure/web/v1/model/request/user-preferences-create.dto';
import { UserAMQPProducer } from '../gateway/amqp/user.amqp';
import { RolesRepository } from '../gateway/database/roles.repository';
import { UsersRepository } from '../gateway/database/users.repository';

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
    private prismaClient: PrismaConfig,
  ) {}

  public getUsers(
    filters: Partial<User>,
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
      comments: false,
      notifications: false,
      roles: true,
      ventures: false,
      detail: false,
      preferences: false,
    });

    if (userDB) {
      return {
        firstName: userDB.firstName,
        lastName: userDB.lastName,
        picture: userDB.picture,
        email: userDB.email,
        id: userDB.id,
        roles: userDB.roles,
        active: userDB.active,
        createdAt: userDB.createdAt,
        updatedAt: userDB.updatedAt,
        preferences: userDB.preferences,
        detail: userDB.detail,
        comments: userDB.comments,
        notifications: userDB.notifications,
        ventures: userDB.ventures,
        onboardingCompleted: userDB.onboardingCompleted,
      };
    }

    const userRole = await this.rolesRepository.findByName(AppRole.USER);
    if (!userRole)
      return Promise.reject(new BadRequestException('Role not found'));

    const userToSave: User = {
      ...user,
      active: true,
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

    return this.usersRepository.save(userToSave).then((savedUser) => {
      this.logger.log(`User ${userToSave.email} saved`);
      return savedUser;
    });
  }

  public async registerUser(
    email: string,
    detail: UserRegisterCreateDto,
  ): Promise<void> {
    const userDB = await this.usersRepository.findByEmail(email, {
      comments: false,
      notifications: false,
      roles: true,
      ventures: false,
      detail: false,
      preferences: false,
    });
    if (!userDB) throw new NotFoundException('User not found');

    this.usersRepository.updateDetail(email, detail);
    this.usersRepository.updatePreferences(email, detail.preferences);
    this.usersRepository.update({
      ...userDB,
      onboardingCompleted: true,
    });
  }

  public async enableUser(userId: string): Promise<User | null> {
    const user = await this.usersRepository.findById(userId, {
      comments: false,
      notifications: false,
      roles: false,
      ventures: false,
      detail: false,
      preferences: false,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.active) {
      throw new BadRequestException('User is already enabled');
    }

    user.active = true;
    return this.usersRepository.update(user).then((userDB) => {
      if (!userDB) {
        throw new BadRequestException('User could not be enabled');
      }
      return userDB;
    });
  }

  public async disableUser(userId: string): Promise<User | null> {
    const user = await this.usersRepository.findById(userId, {
      comments: false,
      notifications: false,
      roles: false,
      ventures: false,
      detail: false,
      preferences: false,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!user.active) {
      throw new BadRequestException('User is already disabled');
    }

    user.active = false;
    return this.usersRepository.update(user).then((userDB) => {
      if (!userDB) {
        throw new BadRequestException('User could not be disabled');
      }
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

  /**
   * Name is not updatable
   */
  public async updateUser(
    userId: string,
    // user: UserUpdate,
  ): Promise<User | null> {
    return Promise.resolve(null);

    // const usersCache = await this.usersCache.getMany('betting_house_*');
    // const userToUpdate = usersCache.find(({ id }) => {
    //   return id === userId;
    // });
    // if (!userToUpdate) {
    //   throw new ConflictException('Betting house does not exists');
    // }
    // const userUpdated = {
    //   ...userToUpdate,
    //   ...user,
    // };
    // return this.usersRepository.update(userUpdated).then((userDB) => {
    //   if (!userDB) {
    //     throw new BadRequestException('Betting house could not be updated');
    //   }
    //   return this.usersCache
    //     .set('betting_house_' + userUpdated.fullName.toLowerCase(), userDB)
    //     .then((userCache) => {
    //       if (!userCache) {
    //         throw new BadRequestException('Betting house could not be saved');
    //       }
    //       return this.userAMQPProducer
    //         .emitUserUpdatedEvent(userDB)
    //         .then(() => userDB);
    //     });
    // });
  }

  public deleteUserById(userId: string): Promise<void> {
    return Promise.resolve();
    // return this.usersRepository.deleteById(userId).then((deleted) => {
    //   if (!deleted) {
    //     throw new BadRequestException('Betting house could not be deleted');
    //   }
    //   const { fullName } = deleted;
    //   this.deleteUserImage(fullName);
    //   return this.usersCache
    //     .delete('betting_house_' + fullName.toLowerCase())
    //     .then((deleted) => {
    //       if (!deleted) {
    //         throw new BadRequestException('Betting house could not be deleted');
    //       }
    //       return this.userAMQPProducer.emitUserDeletedEvent(userId).then(() => {
    //         this.logger.log(`Betting house ${fullName} deleted`);
    //       });
    //     });
    // });
  }

  private deleteUserImage(userName: string) {
    // const files = readdirSync(this.BETTING_HOUSES_IMAGES_FOLDER);
    // console.log({ files });
    // const fileToDelete = files.find((file) => {
    //   return file.split('.')[0] === userName;
    // });
    // if (fileToDelete) {
    //   const filePath = `${this.BETTING_HOUSES_IMAGES_FOLDER}/${fileToDelete}`;
    //   this.logger.log(`Deleting file ${filePath}`);
    //   rmSync(filePath);
    // }
  }

  public getUserPreferences(userId: string) {
    return this.usersRepository
      .findById(userId, {
        comments: false,
        notifications: false,
        roles: false,
        ventures: false,
        detail: false,
        preferences: true,
      })
      .then((user) => {
        if (!user) throw new NotFoundError('User not found');
        return user.preferences;
      });
  }
}
