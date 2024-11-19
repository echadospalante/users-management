import { Transform } from 'class-transformer';
import * as Validate from 'class-validator';
import { ComplexInclude, User } from 'echadospalante-core';
export default class UserQueryDto {
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

  static parseQuery(query: UserQueryDto) {
    const include: ComplexInclude<User> = {
      roles: !!query.includeRoles,
      preferences: !!query.includePreferences,
      detail: !!query.includeDetail,
    };

    return {
      include,
    };
  }
}
