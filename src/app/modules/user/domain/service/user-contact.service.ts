import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';

import { UserContact } from 'echadospalante-core';

import { UserAMQPProducer } from '../gateway/amqp/user.amqp';
import { UserContactRepository } from '../gateway/database/user-contact.repository';

@Injectable()
export class UsersContactService {
  private readonly logger: Logger = new Logger(UsersContactService.name);

  public constructor(
    @Inject(UserContactRepository)
    private userContactRepository: UserContactRepository,
    @Inject(UserAMQPProducer)
    private userAMQPProducer: UserAMQPProducer,
  ) {}

  public async getUserContact(userId: string): Promise<UserContact> {
    const userContact = await this.userContactRepository.findByUserId(userId);
    if (!userContact) {
      throw new NotFoundException('User contact not found');
    }
    return userContact;
  }

  public updateUserContact(): any {
    // TODO: Update user contact info and emit message to AMQP
  }
}
