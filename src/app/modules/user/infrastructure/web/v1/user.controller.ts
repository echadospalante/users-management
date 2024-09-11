import * as Http from '@nestjs/common';
import { Logger, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { User } from 'x-ventures-domain';

import { UsersService } from '../../../domain/service/users.service';
import UserCreateDto from './model/request/user-create.dto';
import UsersQueryDto from './model/request/users-query.dto';

const path = '/users';

@Http.Controller(path)
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  public constructor(private readonly usersService: UsersService) {}

  @Http.Get()
  @Http.HttpCode(Http.HttpStatus.OK)
  public async getAllUsers(@Http.Query() query: UsersQueryDto) {
    const { include, pagination, filters } = UsersQueryDto.parseQuery(query);
    const [items, total] = await Promise.all([
      this.usersService.getUsers(filters, include, pagination),
      this.usersService.countUsers(filters),
    ]);
    return { items, total };
  }

  @Http.Post()
  @Http.HttpCode(Http.HttpStatus.CREATED)
  public createUser(@Http.Body() userCreateDto: UserCreateDto): Promise<User> {
    return this.usersService.saveUser(userCreateDto);
  }

  // @Http.Put(':id')
  // @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  // public updateUser(
  //   @Http.Param('id') userId: string,
  //   @Http.Body() user: UserUpdateDto,
  // ): Promise<User | null> {
  //   return this.usersService.updateUser(userId, user);
  // }

  @Http.Put('enable/:id')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public enableUser(@Http.Param('id') userId: string): Promise<User | null> {
    return this.usersService.enableUser(userId);
  }

  @Http.Put('disable/:id')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public DisableUser(@Http.Param('id') userId: string): Promise<User | null> {
    return this.usersService.disableUser(userId);
  }

  @Http.Put('/image/:id')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  @UseInterceptors(FileInterceptor('file'))
  // @Auth(Roles.ADMIN_ROLE)
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
  public deleteUser(@Http.Param('id') userId: string): Promise<void> {
    return this.usersService.deleteUserById(userId);
  }
}
