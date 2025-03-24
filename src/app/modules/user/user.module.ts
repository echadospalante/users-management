import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  DepartmentData,
  EventCategoryData,
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
import { UsersRepository } from './domain/gateway/database/users.repository';
import { UsersContactService } from './domain/service/users-contact.service';
import { UsersService } from './domain/service/users.service';
import { UserAMQPProducerImpl } from './infrastructure/amqp/producers/user.amqp';
import { RolesRepositoryImpl } from './infrastructure/database/role.repository';
import { UserContactRepositoryImpl } from './infrastructure/database/user-contact.repository';
import { UsersRepositoryImpl } from './infrastructure/database/user.repository';
import { UsersContactController } from './infrastructure/web/v1/user-contact.controller';
import { UsersController } from './infrastructure/web/v1/users.controller';
import { UserPreferencesRepository } from './domain/gateway/database/user-preferences.repository';
import { UserPreferencesRepositoryImpl } from './infrastructure/database/user-preferences.repository';
import { UserDetailRepository } from './domain/gateway/database/user-detail.repository';
import { UserDetailRepositoryImpl } from './infrastructure/database/user-detail.repository';

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
      EventCategoryData,
      EventDonationData,
      MunicipalityData,
      DepartmentData,
      NotificationData,
    ]),
  ],
})
export class UserModule {}
