import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { VenturesHttpClient } from '../../domain/gateway/http/ventures.gateway';
import { HttpService } from './../../../../config/http/axios.config';

@Injectable()
export class VenturesHttpAdapter implements VenturesHttpClient {
  private readonly BASE_VENTURES_URL: string;
  public constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.BASE_VENTURES_URL = this.configService.getOrThrow('BASE_VENTURES_URL');
  }

  public getVenturesCountByUserEmail(email: string): Promise<number> {
    return this.httpService
      .get<{
        result: number;
      }>(
        `${this.BASE_VENTURES_URL}/api/v1/ventures/stats/count-by-user/${email}`,
      )
      .then((response) => response.result);
  }

  public getPublicationsCountByUserEmail(email: string): Promise<number> {
    return this.httpService
      .get<{
        result: number;
      }>(
        `${this.BASE_VENTURES_URL}/api/v1/ventures/_/publications/stats/count-by-user/${email}`,
      )
      .then((response) => response.result);
  }

  public getEventsCountByUserEmail(email: string): Promise<number> {
    return this.httpService
      .get<{
        result: number;
      }>(
        `${this.BASE_VENTURES_URL}/api/v1/ventures/_/events/stats/count-by-user/${email}`,
      )
      .then((response) => response.result);
  }

  public getSubscriptionsCountByUserEmail(email: string): Promise<number> {
    return this.httpService
      .get<{
        result: number;
      }>(
        `${this.BASE_VENTURES_URL}/api/v1/ventures/_/subscriptions/stats/count-by-user/${email}`,
      )
      .then((response) => response.result);
  }

  public getGeneralSubscribersCountByUserEmail(email: string): Promise<number> {
    return this.httpService
      .get<{
        result: number;
      }>(
        `${this.BASE_VENTURES_URL}/api/v1/ventures/_/subscribers/stats/count-by-user/${email}`,
      )
      .then((response) => response.result);
  }

  public getCommentsCountByUserEmail(email: string): Promise<number> {
    return this.httpService
      .get<{
        result: number;
      }>(
        `${this.BASE_VENTURES_URL}/api/v1/publications/_/stats/comments-count-by-user/${email}`,
      )
      .then((response) => response.result);
  }

  public getClapsCountByUserEmail(email: string): Promise<number> {
    return this.httpService
      .get<{
        result: number;
      }>(
        `${this.BASE_VENTURES_URL}/api/v1/publications/_/stats/claps-count-by-user/${email}`,
      )
      .then((response) => response.result);
  }

  public getDonationsGivenCountByUserEmail(email: string): Promise<number> {
    return Promise.resolve(-1);
    // return this.httpService
    //   .get<{
    //     result: number;
    //   }>(
    //     `${this.BASE_VENTURES_URL}/api/v1/donations/stats/given-count-by-user/${email}`,
    //   )
    //   .then((response) => response.result);
  }

  public getDonationsReceivedCountByUserEmail(email: string): Promise<number> {
    return Promise.resolve(-1);
    // return this.httpService
    //   .get<{
    //     result: number;
    //   }>(
    //     `${this.BASE_VENTURES_URL}/api/v1/donations/stats/received-count-by-user/${email}`,
    //   )
    //   .then((response) => response.result);
  }

  public getSponsorshipsGivenCountByUserEmail(email: string): Promise<number> {
    return Promise.resolve(-1);
    // return this.httpService
    //   .get<{
    //     result: number;
    //   }>(
    //     `${this.BASE_VENTURES_URL}/api/v1/sponsorships/stats/given-count-by-user/${email}`,
    //   )
    //   .then((response) => response.result);
  }

  public getSponsorshipsReceivedCountByUserEmail(
    email: string,
  ): Promise<number> {
    return Promise.resolve(-1);
    // return this.httpService
    //   .get<{
    //     result: number;
    //   }>(
    //     `${this.BASE_VENTURES_URL}/api/v1/sponsorships/stats/received-count-by-user/${email}`,
    //   )
    //   .then((response) => response.result);
  }
}
