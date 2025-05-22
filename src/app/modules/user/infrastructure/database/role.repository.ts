import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AppRole, Role } from 'echadospalante-domain';
import { RoleData } from 'echadospalante-domain/dist/app/modules/infrastructure/database/entities';
import { In, Repository } from 'typeorm';

import { RolesRepository } from '../../domain/gateway/database/roles.repository';

@Injectable()
export class RolesRepositoryImpl implements RolesRepository {
  public constructor(
    @InjectRepository(RoleData)
    private readonly userRepository: Repository<RoleData>,
  ) {}

  public findByName(role: AppRole): Promise<Role | null> {
    return this.userRepository
      .findOne({ where: { name: role } })
      .then((role) => role as Role | null);
  }

  public async findAll(): Promise<Role[]> {
    return this.userRepository.find({}).then((roles) => roles as Role[]);
  }

  public findManyByName(roles: AppRole[]): Promise<Role[]> {
    return this.userRepository
      .find({
        where: { name: In(roles) },
      })
      .then((roles) => roles as Role[]);
  }
}
