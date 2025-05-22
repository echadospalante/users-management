import { Transform } from 'class-transformer';
import * as Validate from 'class-validator';
import { AppRole, Pagination } from 'echadospalante-domain';

import { UserFilters } from '../../../../../domain/core/user-filters';

export default class UsersQueryDto {
  @Validate.IsNumber()
  @Validate.IsInt()
  @Transform((param) => parseInt(param.value))
  public skip: number;

  @Transform((param) => parseInt(param.value))
  @Validate.IsNumber()
  @Validate.IsInt()
  @Validate.Min(1)
  public take: number;

  @Validate.IsString()
  @Validate.IsOptional()
  public search?: string;

  @Validate.IsOptional()
  @Validate.IsEnum(AppRole)
  public role?: AppRole;

  static parseQuery(query: UsersQueryDto) {
    const pagination: Pagination = {
      skip: query.skip,
      take: query.take,
    };

    const filters: UserFilters = {
      search: query.search,
      role: query.role,
    };

    return {
      pagination,
      filters,
    };
  }
}
