import { Expose } from 'class-transformer';
import { IsInt } from 'class-validator';

import { RequestPagination } from '~/common/domain';

@Expose()
export class RequestPaginationDTO implements RequestPagination {
  @IsInt()
  public take: number;

  @IsInt()
  public skip: number;

  @IsInt()
  public page: number;

  constructor(partial: Partial<RequestPaginationDTO>) {
    Object.assign(this, partial);
  }
}
