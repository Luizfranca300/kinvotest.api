import { Pagination } from './pagination.model';

export interface Page<T = any> {
  data: T[];
  pagination: Pagination;
}
