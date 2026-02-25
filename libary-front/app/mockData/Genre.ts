export type Genre = {
  name: string;
  isMainGenre: boolean;
};

export const genres: Genre[] = [
  { name: "Fantasy", isMainGenre: true },
  { name: "Science Fiction", isMainGenre: true },
  { name: "Romance", isMainGenre: false },
  { name: "Thriller", isMainGenre: true },
  { name: "Mystery", isMainGenre: false },
  { name: "Horror", isMainGenre: false },
  { name: "Historical", isMainGenre: false },
  { name: "Adventure", isMainGenre: true },
  
];
