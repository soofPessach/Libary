import { books } from "~/mockData/Book";
import { bookGenres } from "~/mockData/BookToGanre";
import { bookWaitlistData } from "~/mockData/BookWaitlist";
import { genres } from "~/mockData/Genre";
import { loansData } from "~/mockData/Loans";

export const getBookByBookId = (bookId?: string) => {
  if (!bookId) return undefined;
  return books.find((book) => book.id === bookId);
};

export const getBookByBooksId = (booksId?: string[]) => {
  if (!booksId || booksId.length === 0) return [];

  return books.filter((book) => booksId?.includes(book.id));
};

export const getBookGenres = (bookId?: string, isOnlyMainGenre?: boolean) => {
  if (!bookId) return [];

  const thisBookGenresNames = bookGenres
    .filter((bookGenre) => bookGenre.bookID === bookId)
    .map((bookGenre) => bookGenre.genre);

  return genres.filter(
    (genre) =>
      (isOnlyMainGenre ? genre.isMainGenre : true) &&
      thisBookGenresNames.some((genreName) => genreName === genre.name),
  );
};

export const isBookInLibraryOnWaitList = (
  bookId?: string,
  libraryId?: String,
) => {
  if (!bookId || !libraryId) return false;

  const waitListBook = bookWaitlistData.filter(
    (bookWaitLIstData) =>
      bookWaitLIstData.bookId === bookId &&
      bookWaitLIstData.libraryId === libraryId,
  );

  return waitListBook.length > 0;
};
