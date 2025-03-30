import { AppRole, Pagination, User } from 'echadospalante-core';

import { UserFilters } from '../../core/user-filters';

export interface UsersRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  countByCriteria(filters: UserFilters): Promise<number>;
  findAllByCriteria(
    filters: UserFilters,
    pagination?: Pagination,
  ): Promise<User[]>;
  deleteById(id: string): Promise<void>;
  save(user: User): Promise<User>;
  findAll(pagination?: Pagination): Promise<User[]>;
  lockAccount(userId: string): Promise<User>;
  unlockAccount(userId: string): Promise<User>;
  verifyAccount(userId: string): Promise<User>;
  unVerifyAccount(userId: string): Promise<User>;
  addUserRoles(userId: string, roles: AppRole[]): Promise<User>;
  removeUserRoles(userId: string, roles: AppRole[]): Promise<User>;
  setOnboardingCompleted(userId: string): Promise<User>;
}

export const UsersRepository = Symbol('UsersRepository');
