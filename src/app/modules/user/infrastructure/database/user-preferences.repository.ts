import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  UserData,
  VentureCategoryData,
} from 'echadospalante-core/dist/app/modules/infrastructure/database/entities';
import { In, Repository } from 'typeorm';

import { VentureCategory } from 'echadospalante-core';
import { UserPreferencesRepository } from '../../domain/gateway/database/user-preferences.repository';

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

  public async findByUserId(userId: string): Promise<VentureCategory[]> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) return [];
    return user.preferences as VentureCategory[];
  }

  public updatePreferences(
    userId: string,
    preferencesIds: string[],
  ): Promise<VentureCategory[] | null> {
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
        .then((user) => user.preferences as VentureCategory[]);
    });
  }
}
