import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { environment, JoiValidationSchema } from '../env/joi.config';
import { RabbitMQConfig } from './config/rabbitmq/amqp.connection';
import { UserModule } from './modules/user/user.module';

@Module({
  providers: [RabbitMQConfig],
  exports: [RabbitMQConfig],
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [environment],
      validationSchema: JoiValidationSchema,
    }),
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        synchronize: configService.get<boolean>('DB_SYNC'),
        logging: configService.get<boolean>('DB_LOGGING'),
        migrations: [__dirname + '../../src/app/config/typeorm/migrations'],
        applicationName: configService.get<string>('APP_NAME'),
        autoLoadEntities: true,
        migrationsRun: false,
        migrationsTableName: 'z_typeorm_migrations',
      }),
    }),
  ],
})
export class AppModule {}
