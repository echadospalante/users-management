import { AppRole, ComplexType, Role } from 'x-ventures-domain';

export interface RolesRepository {
  findByName(USER: AppRole): Promise<Role | null>;
  findAll(include: ComplexType<Role>): Promise<Role[]>;
}

export const RolesRepository = Symbol('RolesRepository');
