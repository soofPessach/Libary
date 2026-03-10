import type { Book } from "~/mockData/Book";
import type { LibraryBook } from "~/mockData/LibraryBook";
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

export const sortBooks = (
  sortBy: SortBy,
  books: Book[],
  libraryBooks: LibraryBook[] = [],
) => {
  switch (sortBy) {
    case SortBy.sortBy:
      return books;

    case SortBy.uploadLast: {
      // Sort by the newest upload date for each book across the user's libraries
      const latestUploadByBook = new Map<string, number>();
      libraryBooks.forEach((lb) => {
        const prev = latestUploadByBook.get(lb.bookId);
        const next = lb.uploadDate.getTime();
        if (!prev || next > prev) latestUploadByBook.set(lb.bookId, next);
      });

      return [...books].sort((a, b) => {
        const aTime = latestUploadByBook.get(a.id) ?? 0;
        const bTime = latestUploadByBook.get(b.id) ?? 0;
        return bTime - aTime;
      });
    }

    default:
      return books;
  }
};
