import { ApiProperty } from '@nestjs/swagger';

import { Exclude, Expose } from 'class-transformer';
import { Pagination } from 'src/common/domain';

@Exclude()
export class PaginationDTO implements Pagination  { 
  @Expose()
  @ApiProperty()
  public page: number;

  @Expose()
  @ApiProperty()
  public take: number;

  @Expose()
  @ApiProperty()
  public skip: number;

  @Expose()
  @ApiProperty()
  public numberOfElements: number;

  @Expose()
  @ApiProperty()
  public totalElementsToBePaged: number;

  @Expose()
  @ApiProperty()
  public first: boolean;

  @Expose()
  @ApiProperty()
  public last: boolean;

  constructor(partial: Partial<PaginationDTO>) {
    Object.assign(this, partial);
  }
}
