import * as Http from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { RolesService } from '../../../domain/service/role.service';

const path = '/roles';

@Http.Controller(path)
export class RolesController {
  private readonly logger = new Logger(RolesController.name);

  public constructor(private readonly rolesService: RolesService) {}

  @Http.Get('')
  @Http.HttpCode(Http.HttpStatus.OK)
  public async getAllRoles() {
    return this.rolesService.getRoles();
  }
}
