export interface Pagination {
  page: number;
  take: number;
  skip: number;
  numberOfElements: number;
  totalElementsToBePaged: number;
  first: boolean;
  last: boolean;
}
