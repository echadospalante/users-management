import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { environment } from '../env/env';
import { JoiValidationSchema } from '../env/joi.config';
import { RabbitMQConfig } from './config/amqp/amqp.connection';
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
  ],
})
export class AppModule {}
