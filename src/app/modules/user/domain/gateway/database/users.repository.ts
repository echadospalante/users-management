import { BasicType, ComplexInclude, Pagination, User } from 'x-ventures-domain';
import UserRegisterCreateDto from '../../../infrastructure/web/v1/model/request/user-preferences-create.dto';

export interface UsersRepository {
  updatePreferences(userId: string, preferences: string[]): Promise<void>;
  updateDetail(userId: string, detail: UserRegisterCreateDto): Promise<void>;
  findByEmail(
    email: string,
    include: ComplexInclude<User>,
  ): Promise<User | null>;
  countByCriteria(filter: Partial<BasicType<User>>): Promise<number>;
  findAllByCriteria(
    filter: Partial<User>,
    include: ComplexInclude<User>,
    pagination?: Pagination,
  ): Promise<User[]>;
  deleteById(id: string): Promise<User | null>;
  findById(id: string, include: ComplexInclude<User>): Promise<User | null>;
  save(user: User): Promise<User>;
  findAll(
    include: ComplexInclude<User>,
    pagination?: Pagination,
  ): Promise<User[]>;
  update(user: User): Promise<User | null>;
}

export const UsersRepository = Symbol('UsersRepository');
