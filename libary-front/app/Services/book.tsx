import { books } from "~/mockData/Book";
import { bookGenres } from "~/mockData/BookToGanre";
import { genres } from "~/mockData/Genre";

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
