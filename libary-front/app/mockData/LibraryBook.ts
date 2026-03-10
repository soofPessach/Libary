export interface LibraryBook {
  libraryId: string;
  bookId: string;
  quantity: number;
  uploadDate: Date;
}

// uploadDate is stored per library-book entry (for example: when that library acquired the book).
export const libraryBooksData: LibraryBook[] = [
  {
    libraryId: "lib1",
    bookId: "1",
    quantity: 1,
    uploadDate: new Date(2024, 0, 5),
  },
  {
    libraryId: "lib1",
    bookId: "2",
    quantity: 1,
    uploadDate: new Date(2024, 1, 10),
  },
  {
    libraryId: "lib1",
    bookId: "3",
    quantity: 1,
    uploadDate: new Date(2024, 2, 15),
  },
  {
    libraryId: "lib1",
    bookId: "4",
    quantity: 1,
    uploadDate: new Date(2024, 3, 20),
  },
  {
    libraryId: "lib1",
    bookId: "5",
    quantity: 1,
    uploadDate: new Date(2024, 4, 25),
  },
  {
    libraryId: "lib2",
    bookId: "1",
    quantity: 1,
    uploadDate: new Date(2024, 5, 3),
  },
  {
    libraryId: "lib2",
    bookId: "6",
    quantity: 1,
    uploadDate: new Date(2024, 6, 7),
  },
  {
    libraryId: "lib2",
    bookId: "7",
    quantity: 1,
    uploadDate: new Date(2024, 7, 11),
  },
  {
    libraryId: "lib2",
    bookId: "8",
    quantity: 1,
    uploadDate: new Date(2024, 8, 15),
  },
  {
    libraryId: "lib2",
    bookId: "9",
    quantity: 1,
    uploadDate: new Date(2024, 9, 19),
  },
  {
    libraryId: "lib3",
    bookId: "10",
    quantity: 5,
    uploadDate: new Date(2024, 10, 23),
  },
  {
    libraryId: "lib3",
    bookId: "11",
    quantity: 4,
    uploadDate: new Date(2024, 11, 27),
  },
  {
    libraryId: "lib3",
    bookId: "12",
    quantity: 7,
    uploadDate: new Date(2025, 0, 2),
  },
  {
    libraryId: "lib3",
    bookId: "13",
    quantity: 5,
    uploadDate: new Date(2025, 1, 6),
  },
  {
    libraryId: "lib3",
    bookId: "14",
    quantity: 6,
    uploadDate: new Date(2025, 2, 10),
  },
];
