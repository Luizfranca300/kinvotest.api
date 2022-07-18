import { HttpStatus } from '@nestjs/common';

import { Observable } from 'rxjs';

import { HttpHeaders } from '../models';

export interface HttpClientContract {
  request<TDataType = any>(
    config: HttpClientContract.Config,
  ): Observable<HttpClientContract.Response<TDataType>>;
}

export namespace HttpClientContract {
  export type HttpMethod =
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH';

  export interface Config {
    baseURL?: string;
    url: string;
    method?: HttpClientContract.HttpMethod;
    headers?: HttpHeaders;
    data?: any;
    params?: Record<string, any>;
    auth?: { username: string; password: string };
  }

  export interface Response<TDataType = any> {
    data: TDataType;
    status: HttpStatus;
    headers: HttpHeaders;
  }
}
