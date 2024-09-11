import { ComplexType, Role } from 'x-ventures-domain';

export interface RolesRepository {
  findAll(include: ComplexType<Role>): Promise<Role[]>;
}

export const RolesRepository = Symbol('RolesRepository');
