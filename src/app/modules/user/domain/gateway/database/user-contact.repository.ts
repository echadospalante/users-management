import { UserContact } from 'echadospalante-domain';

export interface UserContactRepository {
  findByUserId(userId: string): Promise<UserContact | null>;
}

export const UserContactRepository = Symbol('UserContactRepository');
