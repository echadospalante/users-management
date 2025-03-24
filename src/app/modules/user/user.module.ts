import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  RoleData,
  UserContactData,
  UserData,
} from 'echadospalante-core/dist/app/modules/infrastructure/database/entities';

import { RabbitMQConfig } from '../../config/amqp/amqp.connection';
import { CreateUserInterceptor } from './application/interceptors/create-user.interceptor';
import { UserAMQPProducer } from './domain/gateway/amqp/user.amqp';
import { RolesRepository } from './domain/gateway/database/roles.repository';
import { UserContactRepository } from './domain/gateway/database/user-contact.repository';
import { UsersRepository } from './domain/gateway/database/users.repository';
import { UsersContactService } from './domain/service/users-contact.service';
import { UsersService } from './domain/service/users.service';
import { UserAMQPProducerImpl } from './infrastructure/amqp/producers/user.amqp';
import { RolesRepositoryImpl } from './infrastructure/database/role.repository';
import { UserContactRepositoryImpl } from './infrastructure/database/user-contact.repository';
import { UsersRepositoryImpl } from './infrastructure/database/user.repository';
import { UsersContactController } from './infrastructure/web/v1/user-contact.controller';
import { UsersController } from './infrastructure/web/v1/users.controller';

@Module({
  controllers: [UsersController, UsersContactController],
  providers: [
    RabbitMQConfig,
    CreateUserInterceptor,
    UsersService,
    UsersContactService,
    {
      provide: UsersRepository,
      useClass: UsersRepositoryImpl,
    },
    {
      provide: RolesRepository,
      useClass: RolesRepositoryImpl,
    },
    {
      provide: UserContactRepository,
      useClass: UserContactRepositoryImpl,
    },
    {
      provide: UserAMQPProducer,
      useClass: UserAMQPProducerImpl,
    },
  ],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([UserData, RoleData, UserContactData]),
  ],
})
export class UserModule {}
