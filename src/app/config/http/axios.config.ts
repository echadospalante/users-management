import { Injectable } from '@nestjs/common';

import axios from 'axios';

export type HttpParams = {
  [key: string]: string | number | boolean;
};

export type HttpHeaders = {
  [key: string]: string | string[] | undefined;
};

@Injectable()
export class HttpService {
  public get<T>(
    url: string,
    headers?: HttpHeaders,
    params?: URLSearchParams,
  ): Promise<T> {
    return axios
      .get<T>(url, {
        headers,
        params,
      })
      .then((response) => response.data);
  }

  public post<D, T>(url: string, data: D, headers?: HttpHeaders): Promise<T> {
    return axios
      .post<T>(url, data, {
        headers,
      })
      .then((response) => response.data);
  }

  public put<D, T>(url: string, data?: D, headers?: HttpHeaders): Promise<T> {
    return axios
      .put<T>(url, data, {
        headers,
      })
      .then((response) => response.data);
  }

  public patch<D, T>(url: string, data: D, headers?: HttpHeaders): Promise<T> {
    return axios
      .put<T>(url, data, {
        headers,
      })
      .then((response) => response.data);
  }

  public delete<D, T>(
    url: string,
    data?: D,
    headers?: HttpHeaders,
  ): Promise<T> {
    return axios
      .delete<T>(url, { headers, data })
      .then((response) => response.data);
  }
}
