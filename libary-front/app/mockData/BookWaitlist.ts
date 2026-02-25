export interface BookWaitlist {
  bookId: string;
  libraryId: string;
  userId: string;
  position: number;
  dateAdded: Date;
}

export const bookWaitlistData: BookWaitlist[] = [
  {
    bookId: "1",
    libraryId: "lib1",
    userId: "user2",
    position: 1,
    dateAdded: new Date(2024, 1, 10),
  },
  {
    bookId: "1",
    libraryId: "lib1",
    userId: "user3",
    position: 2,
    dateAdded: new Date(2024, 1, 12),
  },
  {
    bookId: "1",
    libraryId: "lib1",
    userId: "user4",
    position: 3,
    dateAdded: new Date(2024, 1, 15),
  },
  {
    bookId: "3",
    libraryId: "lib2",
    userId: "user1",
    position: 1,
    dateAdded: new Date(2024, 1, 8),
  },
  {
    bookId: "3",
    libraryId: "lib2",
    userId: "user5",
    position: 2,
    dateAdded: new Date(2024, 1, 14),
  },
  {
    bookId: "5",
    libraryId: "lib1",
    userId: "user4",
    position: 1,
    dateAdded: new Date(2024, 1, 11),
  },
  {
    bookId: "7",
    libraryId: "lib3",
    userId: "user1",
    position: 1,
    dateAdded: new Date(2024, 1, 9),
  },
  {
    bookId: "7",
    libraryId: "lib3",
    userId: "user2",
    position: 2,
    dateAdded: new Date(2024, 1, 13),
  },
  {
    bookId: "10",
    libraryId: "lib2",
    userId: "user3",
    position: 1,
    dateAdded: new Date(2024, 1, 16),
  },
  {
    bookId: "12",
    libraryId: "lib1",
    userId: "user5",
    position: 1,
    dateAdded: new Date(2024, 1, 17),
  },
];
