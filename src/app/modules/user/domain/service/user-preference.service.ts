import { Inject, Injectable, Logger } from '@nestjs/common';

import { UserAMQPProducer } from '../gateway/amqp/user.amqp';
import { UserPreferencesRepository } from '../gateway/database/user-preferences.repository';

@Injectable()
export class UserPreferencesService {
  private readonly logger: Logger = new Logger(UserPreferencesService.name);

  public constructor(
    @Inject(UserPreferencesRepository)
    private userPreferencesRepository: UserPreferencesRepository,
    @Inject(UserAMQPProducer)
    private userAMQPProducer: UserAMQPProducer,
  ) {}

  public getUserPreferences(userId: string) {
    return this.userPreferencesRepository.findByUserId(userId);
  }

  public updatePreferences(userId: string, preferencesIds: string[]) {
    return this.userPreferencesRepository.updatePreferences(
      userId,
      preferencesIds,
    );
  }
}
