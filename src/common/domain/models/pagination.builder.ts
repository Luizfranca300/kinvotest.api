import { Builder } from '../contracts';
import { Pagination } from './pagination.model';
import { RequestPagination } from './request-pagination.model';

export class PaginationBuilder implements Builder<Pagination> {
  private requestPagination: RequestPagination;
  private totalElementsToBePaged: number;
  private numberOfElements: number;

  public withRequestPagination(
    requestPagination: RequestPagination,
  ): PaginationBuilder {
    this.requestPagination = requestPagination;

    return this;
  }

  public withTotalElementsToBePaged(
    totalElementsToBePaged: number,
  ): PaginationBuilder {
    this.totalElementsToBePaged = totalElementsToBePaged;

    return this;
  }

  public withNumberOfElements(numberOfElements: number): PaginationBuilder {
    this.numberOfElements = numberOfElements;

    return this;
  }

  private getNumberOfElements(): number {
    if (this.numberOfElements !== null && this.numberOfElements !== undefined)
      return this.numberOfElements;

    const { skip, take } = this.requestPagination;
    const totalRemainingItems = this.totalElementsToBePaged - skip;

    if (totalRemainingItems < this.totalElementsToBePaged)
      return Math.max(totalRemainingItems, 0);

    return take;
  }

  public build(): Pagination {
    const { take, page } = this.requestPagination;

    const subtotal = take * page;
    const first = page === 1;
    const last = subtotal >= this.totalElementsToBePaged;

    const numberOfElements =
      this.numberOfElements || this.getNumberOfElements();

    return {
      ...this.requestPagination,
      page,
      last,
      first,
      numberOfElements,
      totalElementsToBePaged: this.totalElementsToBePaged,
    };
  }
}
