import { Injectable } from '@nestjs/common';

import { ComplexInclude, Pagination, Role, User } from 'echadospalante-core';

import { PrismaConfig } from '../../../../config/prisma/prisma.connection';
import { UserFilters } from '../../domain/core/user-filters';
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
          preferences: {
            connect: user.preferences.map((preference) => ({
              id: preference.id,
            })),
          },
          contact: undefined,
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

  public async countByCriteria(filters: UserFilters): Promise<number> {
    const { gender, role, search } = filters;
    return this.prismaClient.client.user.count({
      where: {
        AND: {
          OR: [
            {
              email: {
                contains: search,
              },
            },
            {
              firstName: {
                contains: search,
              },
            },
            {
              lastName: {
                contains: search,
              },
            },
          ],

          detail: {
            gender,
          },
          roles: {
            some: {
              name: role,
            },
          },
        },
      },
    });
  }

  public findAllByCriteria(
    filters: UserFilters,
    include: ComplexInclude<User>,
    pagination?: Pagination,
  ): Promise<User[]> {
    const { gender, role, search } = filters;
    console.log({ filters });
    return this.prismaClient.client.user
      .findMany({
        where: {
          AND: {
            OR: [
              {
                email: {
                  contains: search,
                },
              },
              {
                firstName: {
                  contains: search,
                },
              },
              {
                lastName: {
                  contains: search,
                },
              },
            ],

            detail: {
              gender,
            },
            roles: {
              some: {
                name: role,
              },
            },
          },
        },
        include,
        skip: pagination?.skip,
        take: pagination?.take,
      })
      .then((users) => users as unknown as User[]);
  }

  public deleteByEmail(email: string): Promise<void> {
    return this.prismaClient.client.user
      .delete({
        where: { email },
      })
      .then(() => {
        console.log('User deleted');
      });
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

  public findAll(
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

  public lockAccount(email: string): Promise<User | null> {
    return this.prismaClient.client.user
      .update({
        where: {
          email,
        },
        data: {
          active: false,
        },
      })
      .then((user) => {
        console.log('User locked');
        return user as unknown as User;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  public unlockAccount(email: string): Promise<User | null> {
    return this.prismaClient.client.user
      .update({
        where: {
          email,
        },
        data: {
          active: true,
        },
      })
      .then((user) => {
        console.log('User unlocked');
        return user as unknown as User;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  public verifyAccount(email: string): Promise<User | null> {
    return this.prismaClient.client.user
      .update({
        where: {
          email,
        },
        data: {
          verified: true,
        },
      })
      .then((user) => {
        console.log('User verified');
        return user as unknown as User;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  public unverifyAccount(email: string): Promise<User | null> {
    return this.prismaClient.client.user
      .update({
        where: {
          email,
        },
        data: {
          verified: false,
        },
      })
      .then((user) => {
        console.log('User unverified');
        return user as unknown as User;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  public addUserRoles(email: string, roles: Role[]): Promise<User | null> {
    return this.prismaClient.client.user
      .update({
        where: {
          email,
        },
        data: {
          roles: {
            connect: roles.map((role) => ({
              id: role.id,
            })),
          },
        },
      })
      .then((user) => {
        console.log('User roles updated successfully');
        return user as unknown as User;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  public removeUserRoles(email: string, roles: Role[]): Promise<User | null> {
    return this.prismaClient.client.user
      .update({
        where: {
          email,
        },
        data: {
          roles: {
            disconnect: roles.map((role) => ({
              id: role.id,
            })),
          },
        },
      })
      .then((user) => {
        console.log('User roles updated successfully');
        return user as unknown as User;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  public setOnboardingCompleted(email: string): Promise<User | null> {
    return this.prismaClient.client.user
      .update({
        where: {
          email,
        },
        data: {
          onboardingCompleted: true,
        },
      })
      .then((user) => {
        console.log('User onboarding completed');
        return user as unknown as User;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  public registerUser(
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
