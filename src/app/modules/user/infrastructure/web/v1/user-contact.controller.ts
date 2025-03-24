import * as Http from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { UsersContactService } from '../../../domain/service/users-contact.service';

const path = '/users/contact';

@Http.Controller(path)
export class UsersContactController {
  private readonly logger = new Logger(UsersContactController.name);

  public constructor(
    private readonly usersContactService: UsersContactService,
  ) {}

  @Http.Get('/:email')
  @Http.HttpCode(Http.HttpStatus.OK)
  public async getUserContactByEmail(@Http.Param() email: string) {
    const [items, total] = await Promise.all([
      this.usersContactService.getUserContact(email),
      0,
    ]);
    return { items, total };
  }
}
