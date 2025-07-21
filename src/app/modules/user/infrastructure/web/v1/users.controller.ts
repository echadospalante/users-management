import * as Http from '@nestjs/common';
import { Logger, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { User } from 'echadospalante-domain';

import { UsersService } from '../../../domain/service/user.service';
import UserCreateDto from './model/request/user-create.dto';
import UserRolesUpdateDto from './model/request/user-roles-update.dto';
import UsersQueryDto from './model/request/users-query.dto';

const path = '/users';

@Http.Controller(path)
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  public constructor(private readonly usersService: UsersService) {}

  @Http.Get('/usage/statistics')
  @Http.HttpCode(Http.HttpStatus.OK)
  public getUserOwnedUsageStatistics(
    @Http.Headers('X-Requested-By') userEmail: string,
  ) {
    console.log({ userEmail });
    return this.usersService.getUserOwnedUsageStatistics(userEmail);
  }

  @Http.Get('/id/:id')
  @Http.HttpCode(Http.HttpStatus.OK)
  public getUserById(@Http.Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Http.Get('/email/:email')
  @Http.HttpCode(Http.HttpStatus.OK)
  public getUserByEmail(@Http.Param('email') email: string): Promise<User> {
    return this.usersService.getUserByEmail(email);
  }

  @Http.Post('')
  @Http.HttpCode(Http.HttpStatus.CREATED)
  public registerUser(
    @Http.Body() userCreateDto: UserCreateDto,
  ): Promise<User> {
    this.logger.log('Creating user with email ' + userCreateDto.email);
    return this.usersService.saveUser(userCreateDto);
  }

  @Http.Get('')
  @Http.HttpCode(Http.HttpStatus.OK)
  public async getAllUsers(@Http.Query() query: UsersQueryDto) {
    console.log('Query', query);

    const { pagination, filters } = UsersQueryDto.parseQuery(query);
    const [items, total] = await Promise.all([
      this.usersService.getUsers(filters, pagination),
      this.usersService.countUsers(filters),
    ]);
    return { items, total };
  }

  @Http.Put('/:id/enable')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public enableUser(@Http.Param('id') id: string): Promise<User | null> {
    this.logger.log('Enabling user with id ' + id);
    return this.usersService.enableUser(id);
  }

  @Http.Put('/:id/disable')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public disableUser(@Http.Param('id') id: string): Promise<User | null> {
    this.logger.log('Disabling user with id ' + id);
    return this.usersService.disableUser(id);
  }

  @Http.Put('/:id/verify')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public verifyUser(@Http.Param('id') id: string): Promise<User | null> {
    this.logger.log('Verifying user with id ' + id);
    return this.usersService.verifyUser(id);
  }

  @Http.Put('/:id/un-verify')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public unVerifyUser(@Http.Param('id') id: string): Promise<User | null> {
    this.logger.log('Undoing verification user with id ' + id);
    return this.usersService.unVerifyUser(id);
  }

  @Http.Put('/:id/roles')
  @Http.HttpCode(Http.HttpStatus.ACCEPTED)
  public changeUserRoles(
    @Http.Param('id') userId: string,
    @Http.Body() body: UserRolesUpdateDto,
  ): Promise<void> {
    const { roles } = body;
    return this.usersService.updateRolesToUser(userId, roles);
  }

  @Http.Put('/:id/image')
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

  @Http.Delete('/:id')
  @Http.HttpCode(Http.HttpStatus.NO_CONTENT)
  public deleteUser(@Http.Param('id') id: string): Promise<void> {
    return this.usersService.deleteById(id);
  }
}
