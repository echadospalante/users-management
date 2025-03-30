import { Inject, Injectable, Logger } from '@nestjs/common';

import { AppRole, Role } from 'echadospalante-core';

import { RolesRepository } from '../gateway/database/roles.repository';

@Injectable()
export class RolesService {
  private readonly logger: Logger = new Logger(RolesService.name);

  public constructor(
    @Inject(RolesRepository)
    private rolesRepository: RolesRepository,
  ) {}

  public getRoles(): Promise<Role[]> {
    this.logger.log('Getting all roles');
    return this.rolesRepository.findAll();
  }

  public findManyByName(roles: AppRole[]): Promise<Role[]> {
    return this.rolesRepository.findManyByName(roles);
  }
  public findByName(role: AppRole): Promise<Role | null> {
    return this.rolesRepository.findByName(role);
  }
}
