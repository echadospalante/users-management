import * as Http from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { UsersContactService } from '../../../domain/service/user-contact.service';

const path = '/users';

@Http.Controller(path)
export class UsersContactController {
  private readonly logger = new Logger(UsersContactController.name);

  public constructor(
    private readonly usersContactService: UsersContactService,
  ) {}

  @Http.Get('/:id/contact')
  @Http.HttpCode(Http.HttpStatus.OK)
  public async getUserContactById(@Http.Param('id') id: string) {
    const [items, total] = await Promise.all([
      this.usersContactService.getUserContact(id),
      0,
    ]);
    return { items, total };
  }
}
