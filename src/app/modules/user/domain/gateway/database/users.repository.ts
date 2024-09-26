import {
  BasicType,
  ComplexInclude,
  Pagination,
  Role,
  User,
} from 'echadospalante-core';
import UserRegisterCreateDto from '../../../infrastructure/web/v1/model/request/user-preferences-create.dto';

export interface UsersRepository {
  updatePreferences(userId: string, preferences: string[]): Promise<void>;
  updateDetail(userId: string, detail: UserRegisterCreateDto): Promise<void>;
  findByEmail(
    email: string,
    include: Partial<ComplexInclude<User>>,
  ): Promise<User | null>;
  countByCriteria(filter: Partial<BasicType<User>>): Promise<number>;
  findAllByCriteria(
    filter: Partial<User>,
    include: Partial<ComplexInclude<User>>,
    pagination?: Pagination,
  ): Promise<User[]>;
  deleteByEmail(id: string): Promise<void>;
  findById(
    id: string,
    include: Partial<ComplexInclude<User>>,
  ): Promise<User | null>;
  save(user: User): Promise<User>;
  findAll(
    include: Partial<ComplexInclude<User>>,
    pagination?: Pagination,
  ): Promise<User[]>;
  lockAccount(email: string): Promise<User | null>;
  unlockAccount(email: string): Promise<User | null>;
  verifyAccount(email: string): Promise<User | null>;
  unverifyAccount(email: string): Promise<User | null>;
  addUserRoles(email: string, roles: Role[]): Promise<User | null>;
  removeUserRoles(email: string, roles: Role[]): Promise<User | null>;
  setOnboardingCompleted(email: string): Promise<User | null>;
}

export const UsersRepository = Symbol('UsersRepository');
