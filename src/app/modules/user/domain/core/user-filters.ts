import { AppRole } from 'echadospalante-domain';

export interface UserFilters {
  search?: string;
  role?: AppRole;
}
