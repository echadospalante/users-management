import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';

import UserRegisterCreateDto from '../../infrastructure/web/v1/model/request/user-preferences-create.dto';
import { UserAMQPProducer } from '../gateway/amqp/user.amqp';
import { UserDetailRepository } from '../gateway/database/user-detail.repository';
import { UserPreferencesService } from './user-preference.service';
import { UsersService } from './user.service';

@Injectable()
export class UserDetailsService {
  private readonly logger: Logger = new Logger(UserDetailsService.name);

  public constructor(
    private usersService: UsersService,
    private userPreferencesService: UserPreferencesService,
    @Inject(UserDetailRepository)
    private userDetailRepository: UserDetailRepository,
    @Inject(UserAMQPProducer)
    private userAMQPProducer: UserAMQPProducer,
  ) {}

  public async saveDetail(
    userId: string,
    detail: UserRegisterCreateDto,
  ): Promise<void> {
    const user = await this.usersService.getUserById(userId);
    if (!user) throw new NotFoundException('User not found');

    return this.userDetailRepository
      .updateDetail(userId, detail)
      .then(() => {
        return this.userPreferencesService.updatePreferences(
          userId,
          detail.preferencesIds,
        );
      })
      .then(() => this.usersService.setOnboardingCompleted(userId))
      .then(() => this.userAMQPProducer.emitUserRegisteredEvent(user))
      .then(() => this.logger.log(`User ${user.email} registered`));
  }

  public getUserDetail(userId: string) {
    return this.userDetailRepository.findByUserId(userId);
  }
}
