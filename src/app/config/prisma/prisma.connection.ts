import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from './client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaConfig {
  private _client: PrismaClient;
  private logger: Logger = new Logger(PrismaConfig.name);

  public constructor(private configService: ConfigService) {
    this._client = new PrismaClient({
      log: ['query', 'warn', 'error', 'info'],
      errorFormat: 'pretty',
      datasourceUrl: this.configService.getOrThrow('DATABASE_URL'),
    });

    this.logger.log(`🟢 Prisma: Connection successful`);
  }

  public get client(): PrismaClient {
    return this._client;
  }
}
