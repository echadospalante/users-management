import { UserDetail } from 'echadospalante-core';

import UserRegisterCreateDto from '../../../infrastructure/web/v1/model/request/user-preferences-create.dto';

export interface UserDetailRepository {
  findByUserId(userId: string): Promise<UserDetail | null>;
  updateDetail(userId: string, detail: UserRegisterCreateDto): Promise<void>;
}

export const UserDetailRepository = Symbol('UserDetailRepository');
