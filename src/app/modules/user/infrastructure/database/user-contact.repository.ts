import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserContact } from 'echadospalante-core';
import { UserContactData } from 'echadospalante-core/dist/app/modules/infrastructure/database/entities';
import { Repository } from 'typeorm';

import { UserContactRepository } from '../../domain/gateway/database/user-contact.repository';

@Injectable()
export class UserContactRepositoryImpl implements UserContactRepository {
  public constructor(
    @InjectRepository(UserContactData)
    private readonly userRepository: Repository<UserContactData>,
  ) {}

  public async findByUserId(userId: string): Promise<UserContact | null> {
    return this.userRepository
      .findOne({ where: { user: { id: userId } } })
      .then((user) => user as UserContact | null);
  }
}
