import { books } from "~/mockData/Book";
import { bookGenres } from "~/mockData/BookToGanre";
import { libraryBooksData } from "~/mockData/LibraryBook";
import { loansData } from "~/mockData/Loans";
import { users } from "~/mockData/User";
import { userLibrariesData } from "~/mockData/UserLibraries";
import { getBookByBooksId } from "./book";
import { getLibrariesByLibrariesId } from "./library";
import { bookWaitlistData } from "~/mockData/BookWaitlist";

export const getUserByUserId = (userId?: string) => {
  if (!userId) return undefined;

  return users.find((user) => user.id === userId);
};

export const getUserLibrariesId = (userId?: string) => {
  if (!userId) return [];
  return userLibrariesData
    .filter(
      (userLibrary) =>
        userLibrary.userId === userId &&
        userLibrary.membershipStatus === "active",
    )
    .map((userLibrary) => userLibrary.libraryId);
};

export const getUserLibrariesBooksId = (userId?: string) => {
  if (!userId) return [];
  const userLibrariesId = getUserLibrariesId(userId);

  return Array.from(
    new Map(
      libraryBooksData
        .filter((libraryBook) =>
          userLibrariesId.includes(libraryBook.libraryId),
        )
        .map((libraryBook) => [libraryBook.bookId, libraryBook]),
    ).values(),
  ).map((libraryBook) => libraryBook.bookId);
};

export const getUserLoans = (userId?: String, isOnlyCurrentLoans?: boolean) => {
  if (!userId) return [];

  return loansData.filter(
    (loan) =>
      loan.userId === userId && (isOnlyCurrentLoans ? !loan.isReturned : true),
  );
};

export const isBookAvailableForUser = (userId: string, bookId: string) => {
  const userLibrariesId = getUserLibrariesId(userId);

  return isBookIdInLibrariesIdAvailable(bookId, userLibrariesId);
};

export const isBookIdInLibraryIdAvailable = (
  bookId: string,
  libraryId: string,
) => {
  const libraryBookCopies =
    libraryBooksData.find(
      (libraryBook) =>
        libraryBook.bookId === bookId && libraryBook.libraryId === libraryId,
    )?.quantity ?? 0;

  const currentLoansBookInLibrary = loansData.filter(
    (loan) =>
      loan.bookId === bookId &&
      loan.libraryId === libraryId &&
      !loan.isReturned,
  );

  return libraryBookCopies - currentLoansBookInLibrary.length > 0
    ? true
    : false;
};

export const isBookIdInLibrariesIdAvailable = (
  bookId: string,
  librariesId: string[],
) => {
  let found = false;
  librariesId.forEach((libraryId) => {
    const libraryBookCopies =
      libraryBooksData.find(
        (libraryBook) =>
          libraryBook.bookId === bookId && libraryBook.libraryId === libraryId,
      )?.quantity ?? 0;

    const currentLoansBookInLibrary = loansData.filter(
      (loan) =>
        loan.bookId === bookId &&
        loan.libraryId === libraryId &&
        !loan.isReturned,
    );

    found =
      found ||
      (libraryBookCopies - currentLoansBookInLibrary.length > 0 ? true : false);
  });

  return found;
};

export const getBooksByAuthor = (userId?: string, author?: string) => {
  if (!author || !userId) return [];
  return getBookByBooksId(getUserLibrariesBooksId(userId)).filter(
    (book) => book.author === author,
  );
};

export const getBooksByGenre = (userId?: string, genre?: string) => {
  if (!genre || !userId) return [];

  const bookIdsThisGenre = bookGenres
    .filter((bookGenre) => bookGenre.genre === genre)
    .map((bookGenre) => bookGenre.bookID);

  return getBookByBooksId(getUserLibrariesBooksId(userId)).filter((book) =>
    bookIdsThisGenre.some((bookId) => bookId === book.id),
  );
};

export const getBookIdAvlUserLibraries = (userId?: string, bookId?: string) => {
  if (!userId || !bookId) return [];

  const userLibraries = getUserLibrariesId(userId);

  return getLibrariesByLibrariesId(
    userLibraries.filter((userLibrary) =>
      isBookIdInLibraryIdAvailable(bookId, userLibrary),
    ),
  );
};

export const getBookNameOrAuthorByTerm = (userId?: string, term?: string) => {
  if (!userId || !term) return [];

  const authBooks = getBookByBooksId(getUserLibrariesBooksId(userId));

  return authBooks.filter(
    (authBook) =>
      authBook.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()) ||
      authBook.author.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
  );
};

export const getUserWaitList = (userId?: string) => {
  if (!userId) return [];

  return bookWaitlistData.filter(
    (bookInWaitlist) => bookInWaitlist.userId === userId,
  );
};
