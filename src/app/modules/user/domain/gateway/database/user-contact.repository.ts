import { UserContact } from 'echadospalante-core';

export interface UserContactRepository {
  findByUserId(userId: string): Promise<UserContact | null>;
}

export const UserContactRepository = Symbol('UserContactRepository');
