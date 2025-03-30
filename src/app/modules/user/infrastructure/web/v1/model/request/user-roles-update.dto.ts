import * as Validate from 'class-validator';
import { AppRole } from 'echadospalante-core';

export default class UserRolesUpdateDto {
  @Validate.IsArray()
  @Validate.IsEnum(AppRole, { each: true })
  public roles: AppRole[];
}
