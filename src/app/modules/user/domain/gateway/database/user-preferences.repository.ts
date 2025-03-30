import { VentureCategory } from 'echadospalante-core';

export interface UserPreferencesRepository {
  findByUserId(userId: string): Promise<VentureCategory[]>;
  updatePreferences(
    userId: string,
    preferencesIds: string[],
  ): Promise<VentureCategory[] | null>;
}

export const UserPreferencesRepository = Symbol('UserPreferencesRepository');
