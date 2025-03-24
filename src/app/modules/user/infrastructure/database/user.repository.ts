import { Injectable } from '@nestjs/common';

import { AppRole, Pagination, User, UserDetail } from 'echadospalante-core';

import { InjectRepository } from '@nestjs/typeorm';
import {
  RoleData,
  UserData,
  UserDetailData,
} from 'echadospalante-core/dist/app/modules/infrastructure/database/entities';
import { In, Repository } from 'typeorm';

import { UserFilters } from '../../domain/core/user-filters';
import { UsersRepository } from '../../domain/gateway/database/users.repository';
import UserRegisterCreateDto from '../web/v1/model/request/user-preferences-create.dto';

@Injectable()
export class UsersRepositoryImpl implements UsersRepository {
  public constructor(
    @InjectRepository(UserData)
    private readonly userRepository: Repository<UserData>,
    @InjectRepository(RoleData)
    private readonly roleRepository: Repository<RoleData>,
    @InjectRepository(UserDetailData)
    private readonly userDetailRepository: Repository<UserDetailData>,
  ) {}

  public updatePreferences(
    userId: string,
    preferences: string[],
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public saveDetail(
    id: string,
    detail: UserRegisterCreateDto,
  ): Promise<UserDetail | null> {
    const userDetail = this.userDetailRepository.create({
      ...detail,
    });
    const res = this.userRepository.findOne({ where: { id } }).then((user) => {
      if (!user) {
        return null;
      }
      user.detail = userDetail;
      return this.userRepository
        .save(user)
        .then(({ detail }) => detail || null);
    });
    return res;
  }

  public findByEmail(email: string): Promise<User | null> {
    return (
      this.userRepository
        .findOne({ where: { email } })
        // TODO: Fix this
        .then((user) => user as User | null)
    );
  }

  public countByCriteria(filters: UserFilters): Promise<number> {
    const { search, role } = filters;

    const query = this.userRepository.createQueryBuilder('user');

    if (search) {
      query.andWhere(
        '(user.email LIKE :term OR user.firstName LIKE :term OR user.lastName LIKE :term)',
        { term: `%${search}%` },
      );
    }

    if (role) {
      query
        .innerJoin('user.roles', 'role')
        .andWhere('role.name = :role', { role });
    }
    return query.getCount();
  }

  public findAllByCriteria(
    filters: UserFilters,
    pagination?: Pagination,
  ): Promise<User[]> {
    const { search, role } = filters;

    const query = this.userRepository.createQueryBuilder('user');

    // Filtro por búsqueda en múltiples campos
    if (search) {
      query.andWhere(
        '(user.email LIKE :term OR user.firstName LIKE :term OR user.lastName LIKE :term)',
        { term: `%${search}%` },
      );
    }

    // Filtro por rol si está definido
    if (role) {
      query
        .innerJoin('user.roles', 'role')
        .andWhere('role.name = :role', { role });
    }

    if (pagination) {
      query.skip(pagination.skip).take(pagination.take);
    }

    // console.log({ sql: query.getSql(), params: query.getParameters() });

    return (
      query
        .getMany()
        // Fix this
        .then((users) => users as User[])
    );
  }

  public deleteById(id: string): Promise<void> {
    return this.userRepository.delete(id).then(() => undefined);
  }

  public findById(id: string): Promise<User | null> {
    return (
      this.userRepository
        .findOne({ where: { id } })
        // TODO: Fix this
        .then((user) => user as User | null)
    );
  }

  public save(user: User): Promise<User> {
    return (
      this.userRepository
        .save(user)
        // TODO: Fix this
        .then((user) => user as User)
    );
  }

  public findAll(pagination?: Pagination): Promise<User[]> {
    if (pagination) {
      const { skip, take } = pagination;
      return (
        this.userRepository
          .find({ skip, take })
          // TODO: Fix this
          .then((users) => users.map((user) => user as User))
      );
    }
    return (
      this.userRepository
        .find()
        // TODO: Fix this
        .then((users) => users.map((user) => user as User))
    );
  }

  public async lockAccount(email: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email });
    if (user) {
      user.active = false;
      return (
        this.userRepository
          .save(user)
          // TODO: Fix this
          .then((user) => user as User)
      );
    }
    return null;
  }

  public async unlockAccount(email: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email });
    if (user) {
      user.active = true;
      return this.userRepository.save(user).then((user) => user as User);
    }
    return null;
  }

  public async verifyAccount(email: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email });
    if (user) {
      user.verified = true;
      return (
        this.userRepository
          .save(user)
          // TODO: Fix this
          .then((user) => user as User)
      );
    }
    return null;
  }

  public async unVerifyAccount(email: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email });
    if (user) {
      user.verified = false;
      return this.userRepository.save(user).then((user) => user as User);
    }
    return null;
  }

  public async setOnboardingCompleted(id: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ id });
    if (user) {
      user.onboardingCompleted = true;
      return this.userRepository.save(user).then((user) => user as User);
    }
    return null;
  }

  public addUserRoles(
    email: string,
    rolesToAdd: AppRole[],
  ): Promise<User | null> {
    return Promise.all([
      this.userRepository.findOneBy({ email }),
      this.roleRepository.find({
        where: { name: In(rolesToAdd) },
      }),
    ]).then(([user, roles]) => {
      if (!user) return null;
      user.roles.push(...roles);
      return (
        this.userRepository
          .save(user)
          // TODO: Fix this
          .then((user) => user as User | null)
      );
    });
  }

  public removeUserRoles(
    email: string,
    roles: AppRole[],
  ): Promise<User | null> {
    return this.userRepository.findOneBy({ email }).then((user) => {
      if (!user) return null;
      user.roles = user.roles.filter(
        (role) => !roles.some((r) => r === role.name),
      );
      return (
        this.userRepository
          .save(user)
          // TODO: Fix this
          .then((user) => user as User | null)
      );
    });
  }
}
