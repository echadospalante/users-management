import { AppRole } from 'echadospalante-core';

export interface UserFilters {
  search?: string;
  gender?: 'M' | 'F' | 'O';
  role?: AppRole;
}
