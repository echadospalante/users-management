import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AppRole, Pagination, User } from 'echadospalante-domain';
import {
  MunicipalityData,
  RoleData,
  UserData,
  VentureCategoryData,
} from 'echadospalante-domain/dist/app/modules/infrastructure/database/entities';
import { In, Repository } from 'typeorm';

import { OnboardingInfo } from '../../domain/core/onboarding';
import { UserFilters } from '../../domain/core/user-filters';
import { UsersRepository } from '../../domain/gateway/database/users.repository';

@Injectable()
export class UsersRepositoryImpl implements UsersRepository {
  public constructor(
    @InjectRepository(UserData)
    private readonly userRepository: Repository<UserData>,
    @InjectRepository(RoleData)
    private readonly roleRepository: Repository<RoleData>,
    @InjectRepository(VentureCategoryData)
    private readonly ventureCateogoryData: Repository<RoleData>,
  ) {}

  public findByEmail(email: string): Promise<User | null> {
    return this.userRepository
      .findOne({ where: { email } })
      .then((user) => JSON.parse(JSON.stringify(user)) as User | null);
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
        .then((users) => JSON.parse(JSON.stringify(users)) as User[])
    );
  }

  public deleteById(id: string): Promise<void> {
    return this.userRepository.delete(id).then(() => undefined);
  }

  public findById(id: string): Promise<User | null> {
    return this.userRepository
      .findOne({ where: { id } })
      .then((user) => JSON.parse(JSON.stringify(user)) as User | null);
  }

  public save(user: User): Promise<User> {
    return this.userRepository
      .save(user)
      .then((user) => JSON.parse(JSON.stringify(user)) as User);
  }

  public findAll(pagination?: Pagination): Promise<User[]> {
    if (pagination) {
      const { skip, take } = pagination;
      return this.userRepository
        .find({ skip, take })
        .then((users) =>
          users.map((user) => JSON.parse(JSON.stringify(user)) as User),
        );
    }
    return this.userRepository
      .find()
      .then((users) =>
        users.map((user) => JSON.parse(JSON.stringify(user)) as User),
      );
  }

  public async lockAccount(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new Error('Usuario no encontrado');

    user.active = false;
    return this.userRepository
      .save(user)
      .then((user) => JSON.parse(JSON.stringify(user)) as User);
  }

  public async unlockAccount(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new Error('Usuario no encontrado');
    user.active = true;
    return this.userRepository
      .save(user)
      .then((user) => JSON.parse(JSON.stringify(user)) as User);
  }

  public async verifyAccount(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new Error('Usuario no encontrado');
    user.verified = true;
    return this.userRepository
      .save(user)
      .then((user) => JSON.parse(JSON.stringify(user)) as User);
  }

  public async unVerifyAccount(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new Error('Usuario no encontrado');
    user.verified = false;
    return this.userRepository
      .save(user)
      .then((user) => JSON.parse(JSON.stringify(user)) as User);
  }

  public async setOnboardingCompleted(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new Error('Usuario no encontrado');
    user.onboardingCompleted = true;
    return this.userRepository
      .save(user)
      .then((user) => JSON.parse(JSON.stringify(user)) as User);
  }

  public addUserRoles(id: string, rolesToAdd: AppRole[]): Promise<User> {
    return Promise.all([
      this.userRepository.findOneBy({ id }),
      this.roleRepository.find({
        where: { name: In(rolesToAdd) },
      }),
    ]).then(([user, roles]) => {
      if (!user) throw new Error('Usuario no encontrado');
      user.roles.push(...roles);
      return this.userRepository
        .save(user)
        .then((user) => JSON.parse(JSON.stringify(user)) as User);
    });
  }

  public removeUserRoles(id: string, roles: AppRole[]): Promise<User> {
    return this.userRepository.findOneBy({ id }).then((user) => {
      if (!user) throw new Error('Usuario no encontrado');
      user.roles = user.roles.filter(
        (role) => !roles.some((r) => r === role.name),
      );
      return this.userRepository
        .save(user)
        .then((user) => JSON.parse(JSON.stringify(user)) as User);
    });
  }

  public async saveOnboarding(
    email: string,
    onboardingInfo: OnboardingInfo,
  ): Promise<void> {
    const { gender, birthDate, municipalityId, preferences } = onboardingInfo;

    const user = await this.userRepository.findOneBy({
      email,
    });
    if (!user) throw new Error('Usuario no encontrado');

    user.birthDate = birthDate;
    user.gender = gender;
    user.municipality = { id: municipalityId } as MunicipalityData;
    user.preferences = preferences.map((id) => ({ id }) as VentureCategoryData);
    user.onboardingCompleted = true;
    await this.userRepository.save(user);
  }
}
