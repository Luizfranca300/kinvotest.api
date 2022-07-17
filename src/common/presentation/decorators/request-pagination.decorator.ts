import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { RequestPaginationDTO } from '../dtos';

export const RequestPagination = createParamDecorator(
  (data: null, ctx: ExecutionContext): RequestPaginationDTO => {
    const request = ctx.switchToHttp().getRequest();
    return request.pagination;
  },
);
