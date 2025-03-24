import { UserContact } from 'echadospalante-core';

export interface UserContactRepository {
  findByEmail(email: string): Promise<UserContact | null>;
}

export const UserContactRepository = Symbol('UserContactRepository');
