import { Transform } from 'class-transformer';
import * as Validate from 'class-validator';

import { ComplexInclude, UserContact } from 'echadospalante-core';
export default class UserContactQueryDto {
  @Transform(({ value }) => value === 'true')
  @Validate.IsBoolean()
  @Validate.IsOptional()
  public includeUser: boolean;

  static parseQuery(query: UserContactQueryDto) {
    const include: ComplexInclude<UserContact> = {
      user: !!query.includeUser,
    };

    return { include };
  }
}
