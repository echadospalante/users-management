import { AppRole, Pagination, Role, User } from 'echadospalante-core';

import UserRegisterCreateDto from '../../../infrastructure/web/v1/model/request/user-preferences-create.dto';
import { UserFilters } from '../../core/user-filters';

export interface UsersRepository {
  updatePreferences(userId: string, preferences: string[]): Promise<void>;
  registerUser(userId: string, detail: UserRegisterCreateDto): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  countByCriteria(filters: UserFilters): Promise<number>;
  findAllByCriteria(
    filters: UserFilters,
    pagination?: Pagination,
  ): Promise<User[]>;
  deleteByEmail(id: string): Promise<void>;
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<User>;
  findAll(pagination?: Pagination): Promise<User[]>;
  lockAccount(email: string): Promise<User | null>;
  unlockAccount(email: string): Promise<User | null>;
  verifyAccount(email: string): Promise<User | null>;
  unVerifyAccount(email: string): Promise<User | null>;
  addUserRoles(email: string, roles: AppRole[]): Promise<User | null>;
  removeUserRoles(email: string, roles: AppRole[]): Promise<User | null>;
  setOnboardingCompleted(email: string): Promise<User | null>;
}

export const UsersRepository = Symbol('UsersRepository');
