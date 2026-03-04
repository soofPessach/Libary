export interface LibraryBook {
  libraryId: string;
  bookId: string;
  quantity: number;
}

export const libraryBooksData: LibraryBook[] = [
  { libraryId: "lib1", bookId: "1", quantity: 1 },
  { libraryId: "lib1", bookId: "2", quantity: 1 },
  { libraryId: "lib1", bookId: "3", quantity: 1 },
  { libraryId: "lib1", bookId: "4", quantity: 1 },
  { libraryId: "lib1", bookId: "5", quantity: 1 },
  { libraryId: "lib2", bookId: "1", quantity: 1 },
  { libraryId: "lib2", bookId: "6", quantity: 1 },
  { libraryId: "lib2", bookId: "7", quantity: 1 },
  { libraryId: "lib2", bookId: "1", quantity: 1 },
  { libraryId: "lib2", bookId: "9", quantity: 1 },
  { libraryId: "lib3", bookId: "10", quantity: 5 },
  { libraryId: "lib3", bookId: "11", quantity: 4 },
  { libraryId: "lib3", bookId: "12", quantity: 7 },
  { libraryId: "lib3", bookId: "13", quantity: 5 },
  { libraryId: "lib3", bookId: "14", quantity: 6 },
];
