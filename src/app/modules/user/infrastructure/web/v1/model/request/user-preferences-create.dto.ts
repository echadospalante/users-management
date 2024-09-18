import { Type } from 'class-transformer';
import * as Validate from 'class-validator';

export default class UserRegisterCreateDto {
  @Validate.IsString()
  @Validate.IsIn(['M', 'F', 'O'])
  public gender: 'M' | 'F' | 'O';

  @Type(() => Date)
  @Validate.IsDate()
  public birthDate: Date;

  @Validate.IsPositive()
  @Validate.IsInt()
  public municipalityId: number;

  @Validate.IsArray()
  public preferences: string[];
}
