import { ComplexInclude, UserContact } from 'echadospalante-core';

export interface UserContactRepository {
  findByEmail(
    email: string,
    include: Partial<ComplexInclude<UserContact>>,
  ): Promise<UserContact | null>;
}

export const UserContactRepository = Symbol('UserContactRepository');
