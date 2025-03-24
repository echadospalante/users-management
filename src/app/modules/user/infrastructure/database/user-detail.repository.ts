import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserDetail } from 'echadospalante-core';
import {
  MunicipalityData,
  UserData,
  UserDetailData,
} from 'echadospalante-core/dist/app/modules/infrastructure/database/entities';
import { Repository } from 'typeorm';

import { UserDetailRepository } from '../../domain/gateway/database/user-detail.repository';
import UserRegisterCreateDto from '../web/v1/model/request/user-preferences-create.dto';

@Injectable()
export class UserDetailRepositoryImpl implements UserDetailRepository {
  public constructor(
    @InjectRepository(UserDetailData)
    private readonly userDetailRepository: Repository<UserDetailData>,
    @InjectRepository(MunicipalityData)
    private readonly municipalityRepository: Repository<MunicipalityData>,
    @InjectRepository(UserData)
    private readonly userRepository: Repository<UserData>,
  ) {}

  public async updateDetail(
    id: string,
    detail: UserRegisterCreateDto,
  ): Promise<void> {
    const { gender, birthDate, municipalityId } = detail;
    const [municipality, userData] = await Promise.all([
      this.municipalityRepository.findOne({
        where: { id: municipalityId },
      }),
      this.userRepository.findOne({ where: { id } }),
    ]);
    if (!municipality) throw new Error('Municipio no encontrado');
    if (!userData) throw new Error('Usuario no encontrado');

    const userDetail = this.userDetailRepository.create({
      municipality,
      gender,
      user: userData,
      birthDate: new Date(birthDate),
      comments: [],
      donations: [],
      notifications: [],
      publicationClaps: [],
      sponsorships: [],
      subscriptions: [],
      ventures: [],
    });

    return this.userDetailRepository.save(userDetail).then(() => undefined);
  }
}
