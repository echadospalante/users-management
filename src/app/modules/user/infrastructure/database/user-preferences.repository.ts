import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  UserData,
  VentureCategoryData,
} from 'echadospalante-core/dist/app/modules/infrastructure/database/entities';
import { In, Repository } from 'typeorm';

import { UserPreferencesRepository } from '../../domain/gateway/database/user-preferences.repository';
import { UserContact } from 'echadospalante-core';

@Injectable()
export class UserPreferencesRepositoryImpl
  implements UserPreferencesRepository
{
  public constructor(
    @InjectRepository(UserData)
    private readonly userRepository: Repository<UserData>,
    @InjectRepository(VentureCategoryData)
    private readonly ventureCategoryRepository: Repository<VentureCategoryData>,
  ) {}

  public updatePreferences(
    userId: string,
    preferencesIds: string[],
  ): Promise<UserContact | null> {
    return Promise.all([
      this.userRepository.findOne({ where: { id: userId } }),
      this.ventureCategoryRepository.find({
        where: { id: In(preferencesIds) },
      }),
    ]).then(([user, preferences]) => {
      if (!user) {
        return null;
      }
      user.preferences = preferences;
      return this.userRepository
        .save(user)
        .then((user) => user as unknown as UserContact);
    });
  }
}
