import { Inject, Injectable, Logger } from '@nestjs/common';
import { Role } from 'echadospalante-core';
import { RolesRepository } from '../gateway/database/roles.repository';

@Injectable()
export class RolesService {
  private readonly logger: Logger = new Logger(RolesService.name);

  public constructor(
    @Inject(RolesRepository)
    private usersRepository: RolesRepository,
  ) {}

  public getRoles(): Promise<Role[]> {
    this.logger.log('Getting all roles');
    return this.usersRepository.findAll({});
  }
}
