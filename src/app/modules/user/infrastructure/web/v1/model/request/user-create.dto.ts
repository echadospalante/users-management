import * as Validate from 'class-validator';

export default class UserCreateDto {
  @Validate.IsString()
  @Validate.IsUrl()
  public picture: string;

  @Validate.IsEmail()
  @Validate.IsString()
  public email: string;

  @Validate.IsString()
  @Validate.Length(3, 255)
  public firstName: string;

  @Validate.IsString()
  @Validate.Length(3, 255)
  public lastName: string;
}
