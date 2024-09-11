import {
  User,
  Pagination,
  BasicType,
  ComplexType,
  ComplexInclude,
} from 'x-ventures-domain';

export interface UsersRepository {
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
  findById(id: string, include: ComplexType<User>): Promise<User | null>;
  save(user: User): Promise<User>;
  findAll(include: ComplexType<User>, pagination?: Pagination): Promise<User[]>;
  update(user: User): Promise<User | null>;
}

export const UsersRepository = Symbol('UsersRepository');
