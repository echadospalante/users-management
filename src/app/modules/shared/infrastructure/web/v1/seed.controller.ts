import * as Http from '@nestjs/common';

import { SeedService } from '../../../domain/service/seed.service';

@Http.Controller('/seed')
export class SeedController {
  public constructor(private readonly seedService: SeedService) {}

  @Http.Post('users')
  @Http.HttpCode(Http.HttpStatus.CREATED)
  public async seedUsers(@Http.Query('amount') amount: number) {
    return this.seedService.seedUsers(amount);
  }

  @Http.Get('/users/random')
  @Http.HttpCode(Http.HttpStatus.OK)
  public async getRandomUser() {
    return this.seedService.getRandomUser();
  }
}
