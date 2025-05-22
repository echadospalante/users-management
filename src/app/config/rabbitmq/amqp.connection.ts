import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ChannelModel, connect } from 'amqplib';

@Injectable()
export class RabbitMQConfig {
  private _client: Promise<ChannelModel>;
  private readonly logger: Logger = new Logger(RabbitMQConfig.name);

  public constructor(private configService: ConfigService) {
    const rabbitUri = this.configService.getOrThrow<string>('RABBIT_URI');
    this._client = connect(rabbitUri);
    this.logger.log(`🟢 AMQP: Connection successful to message broker`);
  }

  public get client() {
    return this._client;
  }
}
