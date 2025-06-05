import { Injectable } from '@nestjs/common';

import { faker } from '@faker-js/faker';

import UserCreateDto from '../../../user/infrastructure/web/v1/model/request/user-create.dto';
import { UsersService } from './../../../user/domain/service/user.service';

@Injectable()
export class SeedService {
  public constructor(private usersService: UsersService) {}
  public async seedUsers(amount: number) {
    for await (const _ of Array(amount).keys()) {
      console.log('Seeding user ', _ + 1, ' of ', amount);
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();

      const userDto: UserCreateDto = {
        picture: faker.image.avatar(),
        email: faker.internet.email({
          firstName: firstName,
          lastName: lastName,
          provider: 'gmail.com',
        }),
        firstName,
        lastName,
      };
      this.usersService.saveUser(userDto);
    }
  }

  public async getRandomUser() {
    return this.usersService.getRandomUser();
  }
}
