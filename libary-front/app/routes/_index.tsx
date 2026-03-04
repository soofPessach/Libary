import BookCardMedium from "../features/book/BookCardMedium";
import BookCardSmall from "../features/book/BookCardSmall";
import BookCardLarge from "../features/book/BookCardLarge";
import { books } from "../mockData/Book";
import AllGenre from "../features/homePage/AllGenre";
import { Separator } from "@radix-ui/themes";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import { userLibrariesData } from "~/mockData/UserLibraries";
import { libraryBooksData } from "~/mockData/LibraryBook";
import { getUserLibrariesBooksId } from "~/Services/user";
import { getBookByBooksId } from "~/Services/book";
import { useMemo, useState } from "react";
import {
  filterBooks,
  sortBooks,
  SortBy,
  type Filter,
} from "~/features/book/filterSortBooks/filterSortBooksLogic";
import FilterSortBooks from "~/features/book/filterSortBooks/filterSortBooks";

export default function Index() {
  const loginUserId = useLoginUserId((state) => state.loginUserId);

  const librariesBooks = getBookByBooksId(getUserLibrariesBooksId(loginUserId));
  const [filters, setFilters] = useState<Filter[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.sortBy);

  const filteredBooks = useMemo(
    () => sortBooks(sortBy, filterBooks(loginUserId, filters, librariesBooks)),
    [loginUserId, filters, librariesBooks],
  );

  return (
    <div className=" flex flex-col flex-wrap content-center gap-5 ">
      <AllGenre />
      <FilterSortBooks
        filters={filters}
        setFilters={setFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Separator my="3" size="4" />

      <div className="grid grid-cols-5 gap-10">
        {filteredBooks.map((book) => (
          <BookCardSmall key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
