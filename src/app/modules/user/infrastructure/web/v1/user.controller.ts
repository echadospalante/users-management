import * as Http from '@nestjs/common';
import { Logger, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { User } from 'echadospalante-core';

import { UsersService } from '../../../domain/service/users.service';
import UserCreateDto from './model/request/user-create.dto';
import UserRegisterCreateDto from './model/request/user-preferences-create.dto';
import UsersQueryDto from './model/request/users-query.dto';
import UserRolesUpdateDto from './model/request/user-roles-update.dto';

const path = '/users';

@Http.Controller(path)
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  public constructor(private readonly usersService: UsersService) {}

  @Http.Get()
  @Http.HttpCode(Http.HttpStatus.OK)
  public async getAllUsers(@Http.Query() query: UsersQueryDto) {
    const { include, pagination, filters } = UsersQueryDto.parseQuery(query);
    console.log({ filters });
    const [items, total] = await Promise.all([
      this.usersService.getUsers(filters, include, pagination),
      this.usersService.countUsers(filters),
    ]);
    return { items, total };
  }

  @Http.Get('/roles')
  @Http.HttpCode(Http.HttpStatus.OK)
  public async getAllRoles() {
    return this.usersService.getRoles();
  }

  @Http.Post()
  @Http.HttpCode(Http.HttpStatus.CREATED)
  public createUser(@Http.Body() userCreateDto: UserCreateDto): Promise<User> {
    this.logger.log(userCreateDto);
    return this.usersService.saveUser(userCreateDto);
  }

  @Http.Put('/enable/:email')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public enableUser(@Http.Param('email') email: string): Promise<User | null> {
    return this.usersService.enableUser(email);
  }

  @Http.Put('/disable/:email')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public disableUser(@Http.Param('email') email: string): Promise<User | null> {
    return this.usersService.disableUser(email);
  }

  @Http.Put('/verify/:email')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public verifyUser(@Http.Param('email') email: string): Promise<User | null> {
    return this.usersService.verifyUser(email);
  }

  @Http.Put('/unverify/:email')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public unverifyUser(
    @Http.Param('email') email: string,
  ): Promise<User | null> {
    console.log({ EMAIL: email });
    return this.usersService.unverifyUser(email);
  }

  @Http.Put('/roles')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public changeUserRoles(@Http.Body() body: UserRolesUpdateDto): Promise<void> {
    const { email, roles } = body;
    return this.usersService.updateRolesToUser(email, roles);
  }

  @Http.Put('/image/:id')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  @UseInterceptors(FileInterceptor('file'))
  public updateUserImage(
    @Http.Param('id') userId: string,
    @Http.UploadedFile() file: Express.Multer.File,
  ): Promise<void> {
    return this.usersService.updateUserImage(userId, {
      mimetype: file.mimetype,
      buffer: file.buffer,
    });
  }

  @Http.Delete(':id')
  @Http.HttpCode(Http.HttpStatus.NO_CONTENT)
  public deleteUser(@Http.Param('email') email: string): Promise<void> {
    return this.usersService.deleteUserByEmail(email);
  }

  @Http.Post('/register/:email')
  @Http.HttpCode(Http.HttpStatus.CREATED)
  public registerUser(
    @Http.Param('email') email: string,
    @Http.Body() preferences: UserRegisterCreateDto,
  ): Promise<void> {
    return this.usersService.registerUser(email, preferences);
  }

  @Http.Get('/preferences/:id')
  @Http.HttpCode(Http.HttpStatus.OK)
  public async getAllUserPreferences(@Http.Param('id') userId: string) {
    return this.usersService.getUserPreferences(userId);
  }

  @Http.Get('/:email')
  @Http.HttpCode(Http.HttpStatus.OK)
  public getUserByEmail(@Http.Param('email') email: string): Promise<User> {
    return this.usersService.getUserByEmail(email);
  }
}
