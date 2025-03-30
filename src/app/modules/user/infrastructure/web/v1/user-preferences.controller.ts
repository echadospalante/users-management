import * as Http from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { UserPreferencesService } from '../../../domain/service/user-preference.service';

const path = '/users';

@Http.Controller(path)
export class UserPreferencesController {
  private readonly logger = new Logger(UserPreferencesController.name);

  public constructor(
    private readonly userPreferencesService: UserPreferencesService,
  ) {}

  @Http.Get('/:id/preferences')
  @Http.HttpCode(Http.HttpStatus.OK)
  public async getAllUserPreferences(@Http.Param('id') userId: string) {
    return this.userPreferencesService.getUserPreferences(userId);
  }
}
