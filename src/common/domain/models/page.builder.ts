import { Builder } from '../contracts';
import { Page } from './page.model';
import { Pagination } from './pagination.model';

export class PageBuilder<T> implements Builder<Page<T>> {
  private data: T[];
  private pagination: Pagination;

  public withData(data: T[]): PageBuilder<T> {
    this.data = data;

    return this;
  }

  public withPagination(pagination: Pagination): PageBuilder<T> {
    this.pagination = pagination;

    return this;
  }

  public build(): Page<T> {
    if (!this.data || !this.pagination)
      throw new Error('Data or pagination is undefined');

    return { data: this.data, pagination: this.pagination };
  }
}
