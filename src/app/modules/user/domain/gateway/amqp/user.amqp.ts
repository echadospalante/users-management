import { User } from 'echadospalante-core';

export interface UserAMQPProducer {
  emitUserCreatedEvent(user: User): Promise<boolean>;
  emitUserUpdatedEvent(user: User): Promise<boolean>;
  emitUserEnabledEvent(user: User): Promise<boolean>;
  emitUserDisabledEvent(user: User): Promise<boolean>;
  emitUserLoggedEvent(user: User): Promise<boolean>;
  emitUserDeletedEvent(user: User): Promise<boolean>;
  emitUserRegisteredEvent(user: User): Promise<boolean>;
  emitUserVerifiedEvent(user: User): Promise<boolean>;
  emitUserUnverifiedEvent(user: User): Promise<boolean>;
}

export const UserAMQPProducer = Symbol('UserAMQPProducer');
