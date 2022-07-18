import {
  BadRequestException,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { catchError, Observable, pluck, throwError } from 'rxjs';

import { HttpClientContract } from '../contracts/http-client.contract';

/**
 * Design pattern: Template Method
 */
export abstract class HttpTemplateMethod<
  HttpRequestContext = any | undefined,
  RequestBody = any | undefined,
  ResponseData = any | undefined,
> {
  constructor(protected readonly httpClient: HttpClientContract) {}

  protected request(context: HttpRequestContext): Observable<ResponseData> {
    const response$ = this.httpClient.request<ResponseData>({
      baseURL: this.getBaseURL(context),
      url: this.getUrl(context),
      method: this.getMethod(context),
      data: this.getRequestBody(context),
      headers: this.getRequestHeaders(context),
      params: this.getParams(context),
    });

    return response$.pipe(
      catchError(error => {
        const customException = this.exceptionFactory(context, error);
        const exception =
          customException || this.extractException(context, error);

        return throwError(() => exception);
      }),
      pluck('data'),
    );
  }

  protected abstract getUrl(context: HttpRequestContext): string;
  protected abstract getMethod(
    context: HttpRequestContext,
  ): HttpClientContract.HttpMethod;

  protected getBaseURL(context: HttpRequestContext): string | undefined;

  protected getBaseURL(): string | undefined {
    return undefined;
  }

  protected getRequestBody(
    context: HttpRequestContext,
  ): RequestBody | undefined;

  protected getRequestBody(): RequestBody | undefined {
    return undefined;
  }

  protected getRequestHeaders(
    context: HttpRequestContext,
  ): Record<string, string> | undefined;

  protected getRequestHeaders(): Record<string, string> | undefined {
    return undefined;
  }

  protected getParams(
    context: HttpRequestContext,
  ): Record<string, any> | undefined;

  protected getParams(): Record<string, any> | undefined {
    return undefined;
  }

  protected exceptionFactory(
    context: HttpRequestContext,
    error: any,
  ): HttpException | undefined;

  protected exceptionFactory(): HttpException | undefined {
    return undefined;
  }

  protected extractException(
    context: HttpRequestContext,
    error: any,
  ): HttpException {
    if (!error.response) return new InternalServerErrorException();

    const response: HttpClientContract.Response = error.response;

    switch (response.status) {
      case HttpStatus.BAD_REQUEST:
        return new BadRequestException('Verifique os dados e tente novamente');
      case HttpStatus.NOT_FOUND:
        return new NotFoundException('Este item não foi encontrado');
      default:
        return new InternalServerErrorException(
          'Falha ao processar sua solicitação',
        );
    }
  }
}
