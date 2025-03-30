import * as Http from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { UserDetailsService } from '../../../domain/service/user-detail.service';
import UserRegisterCreateDto from './model/request/user-preferences-create.dto';

const path = '/users';

@Http.Controller(path)
export class UserDetailsController {
  private readonly logger = new Logger(UserDetailsController.name);

  public constructor(private readonly userDetailsService: UserDetailsService) {}

  @Http.Post('/:id/onboarding')
  @Http.HttpCode(Http.HttpStatus.CREATED)
  public saveDetail(
    @Http.Param('id') userId: string,
    @Http.Body() preferences: UserRegisterCreateDto,
  ): Promise<void> {
    return this.userDetailsService.saveDetail(userId, preferences);
  }

  @Http.Get('/:userId/detail')
  public getUserDetail(@Http.Param('userId') userId: string) {
    console.log({ userId });
    return this.userDetailsService.getUserDetail(userId);
  }
}
