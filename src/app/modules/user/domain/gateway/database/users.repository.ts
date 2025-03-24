import { AppRole, Pagination, User } from 'echadospalante-core';

import UserRegisterCreateDto from '../../../infrastructure/web/v1/model/request/user-preferences-create.dto';
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
  lockAccount(email: string): Promise<User>;
  unlockAccount(email: string): Promise<User>;
  verifyAccount(email: string): Promise<User>;
  unVerifyAccount(email: string): Promise<User>;
  addUserRoles(email: string, roles: AppRole[]): Promise<User>;
  removeUserRoles(email: string, roles: AppRole[]): Promise<User>;
  setOnboardingCompleted(email: string): Promise<User>;
}

export const UsersRepository = Symbol('UsersRepository');
