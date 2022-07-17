import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Observable } from 'rxjs';

import { HttpClientContract } from '~/common/data';

@Injectable()
export class HttpClient implements HttpClientContract {
  constructor(private readonly httpService: HttpService) {}

  public request<TDataType = any>(
    config: HttpClientContract.Config,
  ): Observable<HttpClientContract.Response<TDataType>> {
    return this.httpService.request(config);
  }
}
