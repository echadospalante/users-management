import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RabbitMQConfig } from '../../config/amqp/amqp.connection';
import { PrismaConfig } from '../../config/prisma/prisma.connection';
import { CreateUserInterceptor } from './application/interceptors/create-user.interceptor';
import { UserAMQPProducer } from './domain/gateway/amqp/user.amqp';
import { RolesRepository } from './domain/gateway/database/roles.repository';
import { UsersRepository } from './domain/gateway/database/users.repository';
import { UsersService } from './domain/service/users.service';
import { UserAMQPProducerImpl } from './infrastructure/amqp/producers/user.amqp';
import { RolesRepositoryImpl } from './infrastructure/database/role.repository';
import { UsersRepositoryImpl } from './infrastructure/database/user.repository';
import { UsersController } from './infrastructure/web/v1/user.controller';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaConfig,
    RabbitMQConfig,
    CreateUserInterceptor,
    UsersService,
    {
      provide: UsersRepository,
      useClass: UsersRepositoryImpl,
    },
    {
      provide: RolesRepository,
      useClass: RolesRepositoryImpl,
    },
    {
      provide: UserAMQPProducer,
      useClass: UserAMQPProducerImpl,
    },
  ],
  imports: [ConfigModule],
})
export class UserModule {}
