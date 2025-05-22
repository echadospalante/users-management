import * as Http from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { User } from 'echadospalante-domain';

import { UsersService } from '../../../domain/service/user.service';
import UserCreateDto from './model/request/user-create.dto';
import { OnboardingInfo } from '../../../domain/core/onboarding';
import { Request } from 'express';

const path = '/auth';

@Http.Controller(path)
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  public constructor(private readonly usersService: UsersService) {}

  @Http.Post('/login')
  @Http.HttpCode(Http.HttpStatus.CREATED)
  public loginUser(@Http.Body() userCreateDto: UserCreateDto): Promise<User> {
    this.logger.log('Logging in user with email ' + userCreateDto.email);
    return this.usersService.saveUser(userCreateDto);
  }

  @Http.Post('/onboarding')
  @Http.HttpCode(Http.HttpStatus.CREATED)
  public async saveOnboarding(
    @Http.Body() userCreateDto: OnboardingInfo,
    @Http.Headers('X-Requested-By') userEmail: string,
  ) {
    this.logger.log('Saving onboarding of user ' + userEmail);
    this.usersService.saveOnboarding(userEmail, userCreateDto);
    return {};
  }

  @Http.Get('/refresh')
  @Http.HttpCode(Http.HttpStatus.OK)
  public refreshAuth(@Http.Headers('X-Requested-By') userEmail: string) {
    return this.usersService.refreshAuth(userEmail);
  }
}
