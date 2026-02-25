export type Book = {
  id: string;
  name: string;
  author: string;
  writingDate: Date;
  uploadDate: Date;
  summeryInSentence: string;
  summery: string;
  pageNumber: number;
  firstChapter: string;
  bookCoverSrc: string;
};

const realBooks = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", cover: "https://covers.openlibrary.org/b/id/7725473-L.jpg" },
  { title: "1984", author: "George Orwell", cover: "https://covers.openlibrary.org/b/id/7725474-L.jpg" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "https://covers.openlibrary.org/b/id/7725475-L.jpg" },
  { title: "Pride and Prejudice", author: "Jane Austen", cover: "https://covers.openlibrary.org/b/id/7725476-L.jpg" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", cover: "https://covers.openlibrary.org/b/id/7725477-L.jpg" },
  { title: "Wuthering Heights", author: "Emily Brontë", cover: "https://covers.openlibrary.org/b/id/7725478-L.jpg" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", cover: "https://covers.openlibrary.org/b/id/7725479-L.jpg" },
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", cover: "https://covers.openlibrary.org/b/id/7725480-L.jpg" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", cover: "https://covers.openlibrary.org/b/id/7725481-L.jpg" },
  { title: "Dune", author: "Frank Herbert", cover: "https://covers.openlibrary.org/b/id/7725482-L.jpg" },
  { title: "Ender's Game", author: "Orson Scott Card", cover: "https://covers.openlibrary.org/b/id/7725483-L.jpg" },
  { title: "The Midnight Library", author: "Matt Haig", cover: "https://covers.openlibrary.org/b/id/7725484-L.jpg" },
  { title: "Atomic Habits", author: "James Clear", cover: "https://covers.openlibrary.org/b/id/7725485-L.jpg" },
  { title: "The Lean Startup", author: "Eric Ries", cover: "https://covers.openlibrary.org/b/id/7725486-L.jpg" },
  { title: "Educated", author: "Tara Westover", cover: "https://covers.openlibrary.org/b/id/7725487-L.jpg" },
  { title: "Sapiens", author: "Yuval Noah Harari", cover: "https://covers.openlibrary.org/b/id/7725488-L.jpg" },
  { title: "Malibu Rising", author: "Taylor Jenkins Reid", cover: "https://covers.openlibrary.org/b/id/7725489-L.jpg" },
  { title: "Verity", author: "Colleen Hoover", cover: "https://covers.openlibrary.org/b/id/7725490-L.jpg" },
  { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", cover: "https://covers.openlibrary.org/b/id/7725491-L.jpg" },
  { title: "It Ends with Us", author: "Colleen Hoover", cover: "https://covers.openlibrary.org/b/id/7725492-L.jpg" },
];

export const books: Book[] = Array.from({ length: 100 }, (_, i) => {
  const index = i + 1;
  const bookData = realBooks[(index - 1) % realBooks.length];

  return {
    id: `${index}`,
    name: `${bookData.title} (Vol. ${Math.floor((index - 1) / realBooks.length) + 1})`,
    author: bookData.author,
    writingDate: new Date(1950 + (index % 70), 0, 1),
    uploadDate: new Date(2024, index % 12, (index % 28) + 1),
    summeryInSentence: `A compelling story by ${bookData.author}.`,
    summery: `${bookData.title} is a remarkable work that explores themes of growth, conflict, and transformation while following compelling characters through an engaging narrative journey.`,
    pageNumber: 150 + (index % 350),
    bookCoverSrc: bookData.cover,
    firstChapter:
      "firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter firstChapter",
  };
});
