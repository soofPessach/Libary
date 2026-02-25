import { books } from "./Book";
import { genres } from "./Genre";

export type BookGenre = {
  bookID: string;
  genre: string;
};

export const bookGenres: BookGenre[] = Array.from({ length: 300 }, () => {
  const randomBook = books[Math.floor(Math.random() * books.length)];
  const randomGenre = genres[Math.floor(Math.random() * genres.length)];

  return {
    bookID: String(randomBook.id), // ensures it exists in books
    genre: randomGenre.name, // ensures it exists in genres
  };
});
