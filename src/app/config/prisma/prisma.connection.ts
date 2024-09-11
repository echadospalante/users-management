import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from './client';

@Injectable()
export class PrismaConfig {
  private _client: PrismaClient;
  private logger: Logger = new Logger(PrismaConfig.name);

  public constructor() {
    this._client = new PrismaClient({
      log: ['query', 'warn', 'error', 'info'],
      errorFormat: 'pretty',
    });

    this.logger.log(`🟢 Prisma: Connection successful`);
  }

  public get client(): PrismaClient {
    return this._client;
  }
}
