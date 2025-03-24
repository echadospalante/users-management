import { UserContact } from 'echadospalante-core';

export interface UserPreferencesRepository {
  updatePreferences(
    userId: string,
    preferencesIds: string[],
  ): Promise<UserContact | null>;
}

export const UserPreferencesRepository = Symbol('UserPreferencesRepository');
