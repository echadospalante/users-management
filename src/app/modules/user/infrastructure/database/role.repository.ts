import { Injectable } from '@nestjs/common';

import { ComplexType, Role } from 'x-ventures-domain';

import { PrismaConfig } from '../../../../config/prisma/prisma.connection';
import { RolesRepository } from '../../domain/gateway/database/roles.repository';

@Injectable()
export class RolesRepositoryImpl implements RolesRepository {
  public constructor(private prismaClient: PrismaConfig) {}

  public findAll(include: ComplexType<Role>): Promise<Role[]> {
    return this.prismaClient.client.role
      .findMany({ include })
      .then((roles) => roles as Role[]);
  }
}
