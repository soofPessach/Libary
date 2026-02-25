import { useParams } from "react-router";
import { useMemo } from "react";
import { bookGenres } from "~/mockData/BookToGanre";
import { books } from "~/mockData/Book";
import BookCardMedium from "~/features/book/BookCardMedium";
import { Heading, Separator } from "@radix-ui/themes";
import { getBooksByAuthor } from "~/Services/user";
import { useLoginUserId } from "~/global/zustand/loginUserId";

export default function BookByAuthor() {
  const loginUserId = useLoginUserId((state) => state.loginUserId);

  const { author } = useParams();

  const booksThisGenre = getBooksByAuthor(loginUserId, author);

  return (
    <div className="flex flex-col gap-7 justify-center">
      <Heading size="9" weight="light">
        {author}
      </Heading>
      <div className="flex flex-col gap-7">
        {booksThisGenre.map((book) => (
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
