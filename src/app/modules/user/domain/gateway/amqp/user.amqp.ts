import { User } from 'x-ventures-domain';

export interface UserAMQPProducer {
  emitUserCreatedEvent(user: User): Promise<boolean>;
  emitUserUpdatedEvent(user: User): Promise<boolean>;
  emitUserEnabledEvent(user: User): Promise<boolean>;
  emitUserDisabledEvent(user: User): Promise<boolean>;
  emitUserDeletedEvent(userId: string): Promise<boolean>;
}

export const UserAMQPProducer = Symbol('UserAMQPProducer');
