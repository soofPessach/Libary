import { useParams } from "react-router";
import { useMemo, useState } from "react";
import { bookGenres } from "~/mockData/BookToGanre";
import { books } from "~/mockData/Book";
import BookCardMedium from "~/features/book/BookCardMedium";
import { Heading, Separator } from "@radix-ui/themes";
import { getBooksByGenre, getUserLibraryBooks } from "~/Services/user";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import {
  filterBooks,
  sortBooks,
  SortBy,
  type Filter,
} from "~/features/book/filterSortBooks/filterSortBooksLogic";
import FilterSortBooks from "~/features/book/filterSortBooks/filterSortBooks";
export default function BookByGenre() {
  const { genre } = useParams();
  const loginUserId = useLoginUserId((state) => state.loginUserId);

  const booksThisGenre = getBooksByGenre(loginUserId, genre);
  const userLibraryBooks = getUserLibraryBooks(loginUserId);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.sortBy);

  const filteredBooks = useMemo(
    () =>
      sortBooks(
        sortBy,
        filterBooks(loginUserId, filters, booksThisGenre),
        userLibraryBooks,
      ),
    [loginUserId, filters, booksThisGenre, userLibraryBooks],
  );

  return (
    <div className="flex flex-col gap-7 justify-center">
      <Heading size="9" weight="light">
        {genre}
      </Heading>
      <FilterSortBooks
        filters={filters}
        setFilters={setFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="flex flex-col gap-7">
        {filteredBooks.map((book) => (
          <div className="flex flex-col gap-2">
            {" "}
            <BookCardMedium book={book} />
            <Separator my="3" size="4" />
          </div>
        ))}
      </div>
    </div>
  );
}
