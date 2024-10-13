import { Injectable } from '@nestjs/common';

import { AppRole, ComplexType, Role } from 'echadospalante-core';

import { PrismaConfig } from '../../../../config/prisma/prisma.connection';
import { RolesRepository } from '../../domain/gateway/database/roles.repository';

@Injectable()
export class RolesRepositoryImpl implements RolesRepository {
  public constructor(private prismaClient: PrismaConfig) {}

  public findByName(role: AppRole): Promise<Role | null> {
    return this.prismaClient.client.role
      .findFirst({
        where: { name: role },
      })
      .then((role) => role as Role | null);
  }

  public findAll(include: ComplexType<Role>): Promise<Role[]> {
    return this.prismaClient.client.role
      .findMany({ include })
      .then((roles) => roles as Role[]);
  }

  public findManyByName(roles: AppRole[]): Promise<Role[]> {
    return this.prismaClient.client.role
      .findMany({
        where: {
          name: {
            in: roles,
          },
        },
      })
      .then((roles) => roles as Role[]);
  }
}
