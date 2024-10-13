import { Transform } from 'class-transformer';
import * as Validate from 'class-validator';
import { AppRole, ComplexInclude, Pagination, User } from 'echadospalante-core';
import { UserFilters } from 'src/app/modules/user/domain/core/user-filters';
export default class UsersQueryDto {
  @Transform(({ value }) => value === 'true')
  @Validate.IsBoolean()
  @Validate.IsOptional()
  public includeNotifications: boolean;

  @Transform(({ value }) => value === 'true')
  @Validate.IsBoolean()
  @Validate.IsOptional()
  public includeRoles: boolean;

  @Transform(({ value }) => value === 'true')
  @Validate.IsBoolean()
  @Validate.IsOptional()
  public includeVentures: boolean;

  @Transform(({ value }) => value === 'true')
  @Validate.IsBoolean()
  @Validate.IsOptional()
  public includePreferences: boolean;

  @Transform(({ value }) => value === 'true')
  @Validate.IsBoolean()
  @Validate.IsOptional()
  public includeComments: boolean;

  @Transform(({ value }) => value === 'true')
  @Validate.IsBoolean()
  @Validate.IsOptional()
  public includeDetail: boolean;

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

  @Validate.IsString()
  @Validate.IsIn(['M', 'F', 'O'])
  @Validate.IsOptional()
  public gender?: 'M' | 'F' | 'O';

  @Validate.IsOptional()
  @Validate.IsEnum(AppRole)
  public role?: AppRole;

  static parseQuery(query: UsersQueryDto) {
    const include: ComplexInclude<User> = {
      roles: !!query.includeRoles,
      preferences: !!query.includePreferences,
      detail: !!query.includeDetail,
    };

    const pagination: Pagination = {
      skip: query.skip,
      take: query.take,
    };

    const filters: UserFilters = {
      search: query.search,
      gender: query.gender,
      role: query.role,
    };

    return {
      include,
      pagination,
      filters,
    };
  }
}
