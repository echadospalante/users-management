import { Injectable } from '@nestjs/common';

// import { BasicType, ComplexInclude, Pagination, User } from 'x-ventures-domain';

import { BasicType, ComplexInclude, Pagination, User } from 'x-ventures-domain';

import { PrismaConfig } from '../../../../config/prisma/prisma.connection';
import { UsersRepository } from '../../domain/gateway/database/users.repository';
import UserRegisterCreateDto from '../web/v1/model/request/user-preferences-create.dto';

@Injectable()
export class UsersRepositoryImpl implements UsersRepository {
  public constructor(private prismaClient: PrismaConfig) {}

  public save(user: User): Promise<User> {
    return this.prismaClient.client.user
      .create({
        data: {
          ...user,
          roles: {
            connect: user.roles.map((role) => ({ id: role.id })),
          },
          notifications: {
            connect: user.notifications.map((notification) => ({
              id: notification.id,
            })),
          },
          comments: {
            connect: user.comments.map((comment) => ({
              id: comment.id,
            })),
          },
          ventures: {
            connect: user.ventures.map((venture) => ({
              id: venture.id,
            })),
          },
          preferences: {
            connect: user.preferences.map((preference) => ({
              id: preference.id,
            })),
          },
          detail: undefined,
        },
      })
      .then(() => user as User);
  }

  public findByEmail(
    email: string,
    include: ComplexInclude<User>,
  ): Promise<User | null> {
    return this.prismaClient.client.user
      .findFirst({
        where: {
          email,
        },
        include,
      })
      .then((user) => user as User | null);
  }

  public countByCriteria(filter: Partial<BasicType<User>>): Promise<number> {
    return 0;
  }

  public findAllByCriteria(
    filter: Partial<User>,
    include: ComplexInclude<User>,
    pagination?: Pagination,
  ): Promise<User[]> {
    return this.prismaClient.client.user
      .findMany({
        include,
        skip: pagination?.skip,
        take: pagination?.take,
      })
      .then((users) => users as unknown as User[]);
  }

  public deleteById(id: string): Promise<User | null> {
    return Promise.resolve(null);
  }

  public findById(
    id: string,
    include: ComplexInclude<User>,
  ): Promise<User | null> {
    return this.prismaClient.client.user
      .findUnique({
        where: {
          id,
        },
        include,
      })
      .then((user) => user as User | null);
  }

  findAll(
    include: ComplexInclude<User>,
    pagination?: Pagination,
  ): Promise<User[]> {
    return Promise.resolve([]);
  }

  update(user: User): Promise<User | null> {
    return Promise.resolve(null);
  }

  //   public countByCriteria(filter: Partial<BasicType<User>>): Promise<number> {
  //     return this.prismaClient.client.user.count({
  //       where: { ...filter },
  //     });
  //   }

  //   public async findAllByCriteria(
  //     filter: Partial<BasicType<User>>,
  //     include: ComplexInclude<User>,
  //     pagination?: Pagination,
  //   ): Promise<User[]> {
  //     return Promise.resolve([]);
  //   }

  //   public async save(user: User, countriesIds: number[]): Promise<User> {
  //     console.log({ user });
  //     return Promise.resolve(user);
  //   }

  //   public async update(user: User): Promise<User | null> {
  //     return null;
  //   }

  //   public async findById(
  //     id: string,
  //     // include: UserInclude,
  //   ): Promise<User | null> {
  //     // return this.prismaClient.client.user
  //     //   .findUnique({
  //     //     where: {
  //     //       id,
  //     //     },
  //     //     include,
  //     //   })
  //     //   .then((user) => user as User | null);
  //     return Promise.resolve(null);
  //   }

  //   public findAll(
  //     // // include: UserInclude,
  //     pagination?: Pagination,
  //   ): Promise<User[]> {
  //     // if (!pagination) {
  //     //   return this.prismaClient.client.user
  //     //     .findMany({
  //     //       include,
  //     //     })
  //     //     .then((users) => users as User[]);
  //     // }
  //     // const { skip, take } = pagination;
  //     // return this.prismaClient.client.user
  //     //   .findMany({
  //     //     include,
  //     //     skip,
  //     //     take,
  //     //   })
  //     //   .then((users) => users as User[]);
  //     return Promise.resolve([]);
  //   }

  //   public async deleteById(id: string): Promise<User | null> {
  //     // return this.prismaClient.client.user.delete({
  //     //   where: {
  //     //     id,
  //     //   },
  //     // });
  //     return null;
  //   }

  public updateDetail(
    email: string,
    detail: UserRegisterCreateDto,
  ): Promise<void> {
    return this.prismaClient.client.userDetail
      .create({
        data: {
          gender: detail.gender,
          birthDate: detail.birthDate,
          municipality: {
            connect: {
              id: detail.municipalityId,
            },
          },
          user: {
            connect: {
              email,
            },
          },
        },
      })
      .then(() => {
        console.log('User detail updated');
      });
  }

  public updatePreferences(
    email: string,
    preferences: string[],
  ): Promise<void> {
    return this.prismaClient.client.user
      .update({
        where: {
          email,
        },
        data: {
          preferences: {
            connect: preferences.map((preference) => ({
              id: preference,
            })),
          },
        },
      })
      .then(() => {
        console.log('User preferences updated');
      });
  }
}
