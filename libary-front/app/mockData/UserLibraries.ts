export interface UserLibrary {
  userId: string;
  libraryId: string;
  membershipDate: Date;
  membershipStatus: "active" | "inactive" | "suspended";
}

export const userLibrariesData: UserLibrary[] = [
  {
    userId: "1",
    libraryId: "lib1",
    membershipDate: new Date(2023, 5, 15),
    membershipStatus: "active",
  },
  {
    userId: "1",
    libraryId: "lib2",
    membershipDate: new Date(2023, 8, 20),
    membershipStatus: "active",
  },
  {
    userId: "2",
    libraryId: "lib1",
    membershipDate: new Date(2023, 0, 10),
    membershipStatus: "active",
  },
  {
    userId: "2",
    libraryId: "lib3",
    membershipDate: new Date(2023, 11, 5),
    membershipStatus: "active",
  },
  {
    userId: "3",
    libraryId: "lib2",
    membershipDate: new Date(2024, 1, 12),
    membershipStatus: "active",
  },
  {
    userId: "3",
    libraryId: "lib3",
    membershipDate: new Date(2024, 2, 8),
    membershipStatus: "active",
  },
  {
    userId: "4",
    libraryId: "lib1",
    membershipDate: new Date(2023, 3, 25),
    membershipStatus: "active",
  },
  {
    userId: "4",
    libraryId: "lib4",
    membershipDate: new Date(2023, 9, 14),
    membershipStatus: "inactive",
  },
  {
    userId: "5",
    libraryId: "lib2",
    membershipDate: new Date(2023, 7, 30),
    membershipStatus: "active",
  },
  {
    userId: "5",
    libraryId: "lib5",
    membershipDate: new Date(2024, 0, 18),
    membershipStatus: "active",
  },
];
