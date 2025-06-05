import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from '../user/user.module';
import { SeedService } from './domain/service/seed.service';
import { SeedController } from './infrastructure/web/v1/seed.controller';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ConfigModule, UserModule],
  exports: [],
})
export class SharedModule {}
