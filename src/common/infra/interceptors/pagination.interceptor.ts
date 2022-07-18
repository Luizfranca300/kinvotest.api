import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';

import { RequestPaginationDTO } from 'src/common/presentation';

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
  constructor(private readonly configService: ConfigService) {}

  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    // TODO verificar o contexto da requisição quando mudar a aplicação para um micro serviço gRPC
    const request = context.switchToHttp().getRequest();

    const isGETMethod = request.method === 'GET' || request.method === 'get';

    if (!isGETMethod) return next.handle();

    const { page: pageFromQuery, pageSize: pageSizeFromQuery } = request.query;

    const defaultPage = this.configService.get('PAGINATION_PAGE');
    const defaultPageSize = this.configService.get('PAGINATION_PAGE_SIZE');

    const page = Number(pageFromQuery || defaultPage);
    const pageSize = Number(pageSizeFromQuery || defaultPageSize);

    const skip = (page - 1) * pageSize;

    const pagination = plainToClass(RequestPaginationDTO, {
      page,
      take: pageSize,
      skip,
    });

    request.pagination = pagination;

    return next.handle();
  }
}
