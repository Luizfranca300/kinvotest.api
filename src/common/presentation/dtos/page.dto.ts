import { Type as TypeFunction } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { Exclude, Expose, Type } from 'class-transformer';

import { Page } from 'src/common/domain';

import { PaginationDTO } from './pagination.dto';

export function PageDTO<T extends TypeFunction<any> = any>(
  Resource: T, // Class
): {
  new (...args: any[]): Page<T>;
} {
  @Exclude()
  class InnerPageDTO<Resource> implements Page<Resource> {
    @Type(() => Resource)
    @Expose()
    @ApiProperty({ type: () => [Resource] })
    public data: Resource[];

    @Type(() => PaginationDTO)
    @Expose()
    @ApiProperty()
    public pagination: PaginationDTO;

    constructor(partial: Partial<InnerPageDTO<Resource>>) {
      Object.assign(this, partial);
    }
  }

  return InnerPageDTO;
}
