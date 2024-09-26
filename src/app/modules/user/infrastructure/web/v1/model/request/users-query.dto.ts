import { Transform } from 'class-transformer';
import * as Validate from 'class-validator';
import { ComplexInclude, Pagination, User } from 'echadospalante-core';
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
  public search: string;

  @Validate.IsBoolean()
  @Validate.IsOptional()
  @Transform(({ value }) => value === 'true')
  public active: boolean;

  public static parseQuery(query: UsersQueryDto) {
    const include: ComplexInclude<User> = {
      notifications: !!query.includeNotifications,
      roles: !!query.includeRoles,
      ventures: !!query.includeVentures,
      comments: !!query.includeComments,
      preferences: !!query.includePreferences,
    };

    const pagination: Pagination = {
      skip: query.skip,
      take: query.take,
    };

    const filters: Partial<User> = {};

    return {
      include,
      pagination,
      filters,
    };
  }
}
