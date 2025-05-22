import { AppRole, Role } from 'echadospalante-domain';

export interface RolesRepository {
  findManyByName(roles: AppRole[]): Promise<Role[]>;
  findByName(role: AppRole): Promise<Role | null>;
  findAll(): Promise<Role[]>;
}

export const RolesRepository = Symbol('RolesRepository');
