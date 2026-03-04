import type { Book } from "~/mockData/Book";
import { isBookAvailableForUser } from "~/Services/user";

export enum FilterBy {
  availability,
}

export enum SortBy {
  sortBy = "sortBy",
  uploadLast = "uploadLast",
}

export interface Filter {
  filterBy: FilterBy;
  value: boolean;
}

export const filterBooks = (
  loginUserId: string,
  filters: Filter[],
  books: Book[],
) => {
  return books.filter((book) =>
    filters.some((filter) => filter.filterBy === FilterBy.availability)
      ? isBookAvailableForUser(loginUserId, book.id)
      : true,
  );
};

export const sortBooks = (sortBy: SortBy, books: Book[]) => {
  switch (sortBy) {
    case SortBy.sortBy:
      return books;
    case SortBy.uploadLast:
      return books.sort(
        (a, b) =>
          a.uploadDate.getMilliseconds() - b.uploadDate.getMilliseconds(),
      );

    default:
      return books;
  }
};
