import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Channel } from 'amqplib';
import { User } from 'x-ventures-domain';

import { RabbitMQConfig } from '../../../../../config/amqp/amqp.connection';
import { UserAMQPProducer } from '../../../domain/gateway/amqp/user.amqp';

@Injectable()
export class UserAMQPProducerImpl implements UserAMQPProducer {
  private readonly logger: Logger = new Logger(UserAMQPProducerImpl.name);

  public constructor(
    private configService: ConfigService,
    private rabbitMQConfigService: RabbitMQConfig,
  ) {
    this.rabbitMQConfigService.client.then(
      (connection) =>
        connection
          .createChannel()
          // Create/Assert exchange
          .then((channel) => this.assertUsersExchange(channel))
          // Create/Assert queues
          .then((channel) => this.assertUsersEventsQueue(channel))
          // Bind queues
          .then((channel) => this.bindUsersEventsQueues(channel)),
      // Add all exchanges, exchanges, queues, bindings and subscriptions.
    );
  }

  private get usersEventsQueues() {
    return [
      {
        queue: this.configService.getOrThrow<string>(
          'RABBIT_BETTING_HOUSE_CREATED_QUEUE',
        ),
        rk: this.configService.getOrThrow<string>(
          'RABBIT_BETTING_HOUSE_CREATED_RK',
        ),
      },
      {
        queue: this.configService.getOrThrow<string>(
          'RABBIT_BETTING_HOUSE_UPDATED_QUEUE',
        ),
        rk: this.configService.getOrThrow<string>(
          'RABBIT_BETTING_HOUSE_UPDATED_RK',
        ),
      },
      {
        queue: this.configService.getOrThrow<string>(
          'RABBIT_BETTING_HOUSE_ENABLED_QUEUE',
        ),
        rk: this.configService.getOrThrow<string>(
          'RABBIT_BETTING_HOUSE_ENABLED_RK',
        ),
      },
      {
        queue: this.configService.getOrThrow<string>(
          'RABBIT_BETTING_HOUSE_DISABLED_QUEUE',
        ),
        rk: this.configService.getOrThrow<string>(
          'RABBIT_BETTING_HOUSE_DISABLED_RK',
        ),
      },
      {
        queue: this.configService.getOrThrow<string>(
          'RABBIT_BETTING_HOUSE_DELETED_QUEUE',
        ),
        rk: this.configService.getOrThrow<string>(
          'RABBIT_BETTING_HOUSE_DELETED_RK',
        ),
      },
    ];
  }

  private get usersExchange() {
    return this.configService.getOrThrow<string>(
      'RABBIT_BETTING_HOUSES_EXCHANGE',
    );
  }

  private get usersExchangeType() {
    return this.configService.getOrThrow<string>(
      'RABBIT_BETTING_HOUSES_EXCHANGE_TYPE',
    );
  }

  private sendMessageToQueue<T>(
    routingKey: string,
    message: T,
  ): Promise<boolean> {
    return this.rabbitMQConfigService.client
      .then((connection) => connection.createChannel())
      .then((channel) => {
        const result = channel.publish(
          this.usersExchange,
          routingKey,
          Buffer.from(JSON.stringify(message)),
          {
            /* Publish args Ej: priority */
          },
        );
        return channel.close().then(() => result);
      });
  }

  private assertUsersExchange(channel: Channel): PromiseLike<Channel> {
    return channel
      .assertExchange(this.usersExchange, this.usersExchangeType, {
        /* Exchange args */
        durable: true,
      })
      .then(({ exchange }) => {
        this.logger.log(`🟢 RabbitMQ: Asserted exchange ${exchange}`);
        return channel;
      });
  }

  private assertUsersEventsQueue(channel: Channel): PromiseLike<Channel> {
    return Promise.all(
      this.usersEventsQueues.map(({ queue }) =>
        channel
          .assertQueue(queue, {
            /* Queue args */
            durable: true,
            exclusive: false,
          })
          .then(({ queue }) => {
            this.logger.log(`Created queue ${queue}`);
            return channel;
          }),
      ),
    ).then(() => channel);
  }

  private bindUsersEventsQueues(channel: Channel): PromiseLike<Channel> {
    return Promise.all(
      this.usersEventsQueues.map(({ queue, rk }) => {
        return channel.bindQueue(queue, this.usersExchange, rk, {
          /* Binding args */
        });
      }),
    ).then(() => channel);
  }

  public emitUserCreatedEvent(user: User) {
    return this.sendMessageToQueue(
      this.configService.getOrThrow<string>('RABBIT_BETTING_HOUSE_CREATED_RK'),
      user,
    );
  }

  public emitUserUpdatedEvent(user: User) {
    return this.sendMessageToQueue(
      this.configService.getOrThrow<string>('RABBIT_BETTING_HOUSE_UPDATED_RK'),
      user,
    );
  }

  public emitUserEnabledEvent(user: User) {
    return this.sendMessageToQueue(
      this.configService.getOrThrow<string>('RABBIT_BETTING_HOUSE_ENABLED_RK'),
      user,
    );
  }

  public emitUserDisabledEvent(user: User) {
    return this.sendMessageToQueue(
      this.configService.getOrThrow<string>('RABBIT_BETTING_HOUSE_DISABLED_RK'),
      user,
    );
  }

  public emitUserDeletedEvent(userId: string) {
    return this.sendMessageToQueue(
      this.configService.getOrThrow<string>('RABBIT_BETTING_HOUSE_DELETED_RK'),
      userId,
    );
  }
}
