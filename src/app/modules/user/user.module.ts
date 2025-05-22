import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  DepartmentData,
  EventCategoryData,
  EventContactData,
  EventDonationData,
  EventLocationData,
  MunicipalityData,
  NotificationData,
  PublicationCategoryData,
  PublicationClapData,
  PublicationCommentData,
  PublicationContentData,
  RoleData,
  UserContactData,
  UserData,
  VentureCategoryData,
  VentureContactData,
  VentureData,
  VentureEventData,
  VentureLocationData,
  VenturePublicationData,
  VentureSponsorshipData,
  VentureSubscriptionData,
} from 'echadospalante-domain/dist/app/modules/infrastructure/database/entities';

import { RabbitMQConfig } from '../../config/rabbitmq/amqp.connection';
import { CreateUserInterceptor } from './application/interceptors/create-user.interceptor';
import { UserAMQPProducer } from './domain/gateway/amqp/user.amqp';
import { RolesRepository } from './domain/gateway/database/roles.repository';
import { UserContactRepository } from './domain/gateway/database/user-contact.repository';
import { UserPreferencesRepository } from './domain/gateway/database/user-preferences.repository';
import { UsersRepository } from './domain/gateway/database/users.repository';
import { RolesService } from './domain/service/role.service';
import { UsersContactService } from './domain/service/user-contact.service';
import { UserPreferencesService } from './domain/service/user-preference.service';
import { UsersService } from './domain/service/user.service';
import { UserAMQPProducerImpl } from './infrastructure/amqp/producers/user.amqp';
import { RolesRepositoryImpl } from './infrastructure/database/role.repository';
import { UserContactRepositoryImpl } from './infrastructure/database/user-contact.repository';
import { UserPreferencesRepositoryImpl } from './infrastructure/database/user-preferences.repository';
import { UsersRepositoryImpl } from './infrastructure/database/user.repository';
import { UsersContactController } from './infrastructure/web/v1/user-contact.controller';
import { UserPreferencesController } from './infrastructure/web/v1/user-preferences.controller';
import { UsersController } from './infrastructure/web/v1/users.controller';
import { AuthController } from './infrastructure/web/v1/auth.controller';

@Module({
  controllers: [
    UsersContactController,
    UserPreferencesController,
    UsersController,
    AuthController,
  ],
  providers: [
    RolesService,
    UsersContactService,
    UserPreferencesService,
    RabbitMQConfig,
    UsersService,

    CreateUserInterceptor,
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
      provide: UserPreferencesRepository,
      useClass: UserPreferencesRepositoryImpl,
    },
    {
      provide: UserAMQPProducer,
      useClass: UserAMQPProducerImpl,
    },
  ],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      UserData,
      RoleData,
      UserContactData,
      VentureCategoryData,
      VentureData,
      VentureLocationData,
      VentureContactData,
      VentureEventData,
      VenturePublicationData,
      PublicationClapData,
      PublicationCommentData,
      PublicationContentData,
      PublicationCategoryData,
      VentureSponsorshipData,
      VentureSubscriptionData,
      EventLocationData,
      EventContactData,
      EventCategoryData,
      EventDonationData,
      MunicipalityData,
      DepartmentData,
      NotificationData,
    ]),
  ],
})
export class UserModule {}
