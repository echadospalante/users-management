import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { UserCreate } from 'echadospalante-core';
import * as Yup from 'yup';
import UserCreateDto from '../../infrastructure/web/v1/model/request/user-create.dto';

export const createUserSchema = Yup.object().shape({
  picture: Yup.string().url().required(),
  email: Yup.string().email().required(),
  firstName: Yup.string().min(3).max(255).required(),
  lastName: Yup.string().min(3).max(255).required(),
});

@Injectable()
export class CreateUserInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();

    const body = request.body as UserCreateDto;

    const user: UserCreate = {
      picture: body.picture,
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
    };

    return createUserSchema
      .validate(user)
      .then(() => next.handle())
      .catch((err) => {
        throw new Error(err.errors);
      });
  }
}
