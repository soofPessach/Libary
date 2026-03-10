export interface Loan {
  libraryId: string;
  userId: string;
  bookId: string;
  borrowDate: Date;
  dueDate: Date;
  returnDate?: Date;
}

export const loansData: Loan[] = [
  {
    libraryId: "lib1",
    userId: "1",
    bookId: "1",
    borrowDate: new Date(2026, 1, 10),
    dueDate: new Date(2026, 2, 10),
    returnDate: undefined,
  },
  {
    libraryId: "lib2",
    userId: "1",
    bookId: "1",
    borrowDate: new Date(2025, 1, 10),
    dueDate: new Date(2025, 2, 10),
    returnDate: new Date(2025, 2, 10),
  },
  {
    libraryId: "lib1",
    userId: "2",
    bookId: "3",
    borrowDate: new Date(2026, 1, 10),
    dueDate: new Date(2026, 2, 10),
    returnDate: undefined,
  },
  // {
  //   libraryId: "lib1",
  //   userId: "user2",
  //   bookId: "8",
  //   borrowDate: new Date(2024, 1, 5),
  //   dueDate: new Date(2024, 2, 5),
  //   returnDate: new Date(2024, 2, 8),
  //   isReturned: false,
  // },
  // {
  //   libraryId: "lib2",
  //   userId: "user3",
  //   bookId: "2",
  //   borrowDate: new Date(2024, 0, 25),
  //   dueDate: new Date(2024, 1, 25),
  //   returnDate: new Date(2024, 1, 23),
  //   isReturned: true,
  // },
  // {
  //   libraryId: "lib3",
  //   userId: "user3",
  //   bookId: "7",
  //   borrowDate: new Date(2024, 1, 1),
  //   dueDate: new Date(2024, 2, 1),
  //   returnDate: new Date(2024, 2, 5),
  //   isReturned: false,
  // },
  // {
  //   libraryId: "lib1",
  //   userId: "user4",
  //   bookId: "4",
  //   borrowDate: new Date(2024, 0, 10),
  //   dueDate: new Date(2024, 1, 10),
  //   returnDate: new Date(2024, 1, 9),
  //   isReturned: true,
  // },
  // {
  //   libraryId: "lib2",
  //   userId: "user4",
  //   bookId: "12",
  //   borrowDate: new Date(2024, 1, 8),
  //   dueDate: new Date(2024, 2, 8),
  //   returnDate: new Date(2024, 2, 10),
  //   isReturned: false,
  // },
  // {
  //   libraryId: "lib3",
  //   userId: "user5",
  //   bookId: "6",
  //   borrowDate: new Date(2024, 0, 5),
  //   dueDate: new Date(2024, 1, 5),
  //   returnDate: new Date(2024, 1, 4),
  //   isReturned: true,
  // },
  // {
  //   libraryId: "lib1",
  //   userId: "user5",
  //   bookId: "9",
  //   borrowDate: new Date(2024, 1, 12),
  //   dueDate: new Date(2024, 2, 12),
  //   returnDate: new Date(2024, 2, 15),
  //   isReturned: false,
  // },
];
