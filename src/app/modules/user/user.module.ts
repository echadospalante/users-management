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
  PublicationClapData,
  PublicationCommentData,
  PublicationContentData,
  RoleData,
  UserContactData,
  UserData,
  UserDetailData,
  VentureCategoryData,
  VentureContactData,
  VentureData,
  VentureDetailData,
  VentureEventData,
  VentureLocationData,
  VenturePublicationData,
  VentureSponsorshipData,
  VentureSubscriptionData,
} from 'echadospalante-core/dist/app/modules/infrastructure/database/entities';

import { RabbitMQConfig } from '../../config/rabbitmq/amqp.connection';
import { CreateUserInterceptor } from './application/interceptors/create-user.interceptor';
import { UserAMQPProducer } from './domain/gateway/amqp/user.amqp';
import { RolesRepository } from './domain/gateway/database/roles.repository';
import { UserContactRepository } from './domain/gateway/database/user-contact.repository';
import { UserDetailRepository } from './domain/gateway/database/user-detail.repository';
import { UserPreferencesRepository } from './domain/gateway/database/user-preferences.repository';
import { UsersRepository } from './domain/gateway/database/users.repository';
import { RolesService } from './domain/service/role.service';
import { UsersContactService } from './domain/service/user-contact.service';
import { UserDetailsService } from './domain/service/user-detail.service';
import { UserPreferencesService } from './domain/service/user-preference.service';
import { UsersService } from './domain/service/user.service';
import { UserAMQPProducerImpl } from './infrastructure/amqp/producers/user.amqp';
import { RolesRepositoryImpl } from './infrastructure/database/role.repository';
import { UserContactRepositoryImpl } from './infrastructure/database/user-contact.repository';
import { UserDetailRepositoryImpl } from './infrastructure/database/user-detail.repository';
import { UserPreferencesRepositoryImpl } from './infrastructure/database/user-preferences.repository';
import { UsersRepositoryImpl } from './infrastructure/database/user.repository';
import { RolesController } from './infrastructure/web/v1/roles.controller';
import { UsersContactController } from './infrastructure/web/v1/user-contact.controller';
import { UserDetailsController } from './infrastructure/web/v1/user-details.controller';
import { UserPreferencesController } from './infrastructure/web/v1/user-preferences.controller';
import { UsersController } from './infrastructure/web/v1/users.controller';

@Module({
  controllers: [
    RolesController,
    UsersContactController,
    UserDetailsController,
    UserPreferencesController,
    UsersController,
  ],
  providers: [
    RolesService,
    UserDetailsService,
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
      provide: UserDetailRepository,
      useClass: UserDetailRepositoryImpl,
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
      UserDetailData,
      VentureCategoryData,
      VentureData,
      VentureDetailData,
      VentureLocationData,
      VentureContactData,
      VentureEventData,
      VenturePublicationData,
      PublicationClapData,
      PublicationCommentData,
      PublicationContentData,
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
