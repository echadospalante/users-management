import { Injectable } from '@nestjs/common';

import { AppRole, Pagination, User } from 'echadospalante-core';

import { InjectRepository } from '@nestjs/typeorm';
import {
  RoleData,
  UserData,
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
  ) {}

  public updatePreferences(
    userId: string,
    preferences: string[],
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public registerUser(
    userId: string,
    detail: UserRegisterCreateDto,
  ): Promise<void> {
    return Promise.resolve(undefined);
  }

  public findByEmail(email: string): Promise<User | null> {
    return (
      this.userRepository
        .findOne({ where: { email } })
        // TODO: Fix this
        .then((user) => user as unknown as User | null)
    );
  }

  public countByCriteria(filters: UserFilters): Promise<number> {
    const { search, gender, role } = filters;

    const query = this.userRepository.createQueryBuilder('user');

    if (search) {
      query.andWhere(
        '(user.email LIKE :term OR user.firstName LIKE :term OR user.lastName LIKE :term)',
        { term: `%${search}%` },
      );
    }
    if (gender) {
      query.andWhere('user.detail.gender = :gender', { gender });
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
    const { search, gender, role } = filters;

    const query = this.userRepository.createQueryBuilder('user');

    // Filtro por búsqueda en múltiples campos
    if (search) {
      query.andWhere(
        '(user.email LIKE :term OR user.firstName LIKE :term OR user.lastName LIKE :term)',
        { term: `%${search}%` },
      );
    }

    // Filtro por género si está definido
    if (gender) {
      query.andWhere('user.gender = :gender', { gender });
    }

    // Filtro por rol si está definido
    if (role) {
      query
        .innerJoin('user.roles', 'role')
        .andWhere('role.name = :role', { role });
    }

    // Aplicar paginación si está definida
    if (pagination) {
      query.skip(pagination.skip).take(pagination.take);
    }

    return (
      query
        .getMany()
        // Fix this
        .then((users) => users as User[])
    );
  }

  public deleteByEmail(id: string): Promise<void> {
    return this.userRepository.delete(id).then(() => undefined);
  }

  public findById(id: string): Promise<User | null> {
    return (
      this.userRepository
        .findOne({ where: { id } })
        // TODO: Fix this
        .then((user) => user as unknown as User | null)
    );
  }

  public save(user: User): Promise<User> {
    return (
      this.userRepository
        .save(user)
        // TODO: Fix this
        .then((user) => user as unknown as User)
    );
  }

  public findAll(pagination?: Pagination): Promise<User[]> {
    if (pagination) {
      const { skip, take } = pagination;
      return (
        this.userRepository
          .find({ skip, take })
          // TODO: Fix this
          .then((users) => users.map((user) => user as unknown as User))
      );
    }
    return (
      this.userRepository
        .find()
        // TODO: Fix this
        .then((users) => users.map((user) => user as unknown as User))
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
          .then((user) => user as unknown as User)
      );
    }
    return null;
  }

  public async unlockAccount(email: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email });
    if (user) {
      user.active = true;
      return (
        this.userRepository
          .save(user)
          // TODO: Fix this
          .then((user) => user as unknown as User)
      );
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
          .then((user) => user as unknown as User)
      );
    }
    return null;
  }

  public async unVerifyAccount(email: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email });
    if (user) {
      user.verified = false;
      return (
        this.userRepository
          .save(user)
          // TODO: Fix this
          .then((user) => user as unknown as User)
      );
    }
    return null;
  }

  public async setOnboardingCompleted(email: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email });
    if (user) {
      user.onboardingCompleted = false;
      return (
        this.userRepository
          .save(user)
          // TODO: Fix this
          .then((user) => user as unknown as User)
      );
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
          .then((user) => user as unknown as User | null)
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
          .then((user) => user as unknown as User | null)
      );
    });
  }
}
