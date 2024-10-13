import { Injectable } from '@nestjs/common';

import { ComplexInclude, UserContact } from 'echadospalante-core';

import { PrismaConfig } from '../../../../config/prisma/prisma.connection';
import { UserContactRepository } from '../../domain/gateway/database/user-contact.repository';

@Injectable()
export class UserContactRepositoryImpl implements UserContactRepository {
  public constructor(private prismaClient: PrismaConfig) {}

  public findByEmail(
    email: string,
    include: Partial<ComplexInclude<UserContact>>,
  ): Promise<UserContact | null> {
    return this.prismaClient.client.userContact
      .findFirst({
        where: {
          user: {
            email,
          },
        },
        include,
      })
      .then((userContact) => userContact as UserContact | null);
  }
}
