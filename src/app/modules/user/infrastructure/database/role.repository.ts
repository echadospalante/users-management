import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AppRole, Role } from 'echadospalante-core';
import { RoleData } from 'echadospalante-core/dist/app/modules/infrastructure/database/entities';
import { In, Repository } from 'typeorm';

import { RolesRepository } from '../../domain/gateway/database/roles.repository';

@Injectable()
export class RolesRepositoryImpl implements RolesRepository {
  public constructor(
    @InjectRepository(RoleData)
    private readonly userRepository: Repository<RoleData>,
  ) {}

  public findByName(role: AppRole): Promise<Role | null> {
    return (
      this.userRepository
        .findOne({ where: { name: role } })
        // TODO: Fix this
        .then((role) => role as Role | null)
    );
  }

  public findAll(): Promise<Role[]> {
    return (
      this.userRepository
        .find({})
        // TODO: Fix this
        .then((roles) => roles.map((role) => role as Role))
    );
  }

  public findManyByName(roles: AppRole[]): Promise<Role[]> {
    return (
      this.userRepository
        .find({
          where: { name: In(roles) },
        })
        // TODO: Fix this
        .then((roles) => roles.map((role) => role as Role))
    );
  }
}
