import { librariesData } from "~/mockData/Library";

export const getLibraryByLibraryId = (libraryId?: string) => {
  if (!libraryId) return undefined;

  return librariesData.find((library) => library.id === libraryId);
};

export const getLibrariesByLibrariesId = (librariesId?: string[]) => {
  if (!librariesId || librariesId.length < 1) return [];

  return librariesData.filter((library) => librariesId.includes(library.id));
};
