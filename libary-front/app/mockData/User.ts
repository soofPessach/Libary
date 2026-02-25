export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  joinDate: Date;
  role: "librarian" | "reader";
}

export const users: User[] = Array.from({ length: 50 }, (_, i) => {
  const index = i + 1;
  const firstNames = [
    "John",
    "Jane",
    "Michael",
    "Sarah",
    "David",
    "Emily",
    "Robert",
    "Jessica",
    "James",
    "Amanda",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
  ];
  const firstName = firstNames[index % firstNames.length];
  const lastName = lastNames[index % lastNames.length];
  const roles: ("librarian" | "reader")[] = ["librarian", "reader"];

  return {
    id: `${index}`,
    name: `${firstName} ${lastName}`,
    email: `user${index}@library.com`,
    username: `user_${index}`,
    password: `password${index}@Secure`,
    phone: `+1-${201 + (index % 9)}-${555 + (index % 100)}-${1000 + (index % 8999)}`,
    joinDate: new Date(
      2020 + Math.floor(index / 25),
      index % 12,
      (index % 28) + 1,
    ),
    role: roles[index % roles.length],
  };
});
