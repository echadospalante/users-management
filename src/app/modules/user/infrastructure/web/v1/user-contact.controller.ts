import * as Http from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { UsersContactService } from '../../../domain/service/users-contact.service';
import UserContactQueryDto from './model/request/user-contact-query.dto';

const path = '/users/contact';

@Http.Controller(path)
export class UsersContactController {
  private readonly logger = new Logger(UsersContactController.name);

  public constructor(
    private readonly usersContactService: UsersContactService,
  ) {}

  @Http.Get('/:email')
  @Http.HttpCode(Http.HttpStatus.OK)
  public async getAllUsers(
    @Http.Param() email: string,
    @Http.Query() query: UserContactQueryDto,
  ) {
    const { include } = UserContactQueryDto.parseQuery(query);
    console.log({ include, email });
    const [items, total] = await Promise.all([
      this.usersContactService.getUserContact(email, include),
      0,
    ]);
    return { items, total };
  }
}
