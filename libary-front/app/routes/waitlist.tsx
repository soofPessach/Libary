import { useNavigate, useParams } from "react-router";
import { useMemo } from "react";
import { bookGenres } from "~/mockData/BookToGanre";
import { books } from "~/mockData/Book";
import BookCardMedium from "~/features/book/BookCardMedium";
import { Button, Heading, Separator, Text } from "@radix-ui/themes";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import { getUserWaitList } from "~/Services/user";
import WaitlistBook from "~/features/waitlist/waitlistBook";

export default function Waitlist() {
  const loginUserId = useLoginUserId((state) => state.loginUserId);

  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/");
  };

  const userWishlistBooks = getUserWaitList(loginUserId);

  return (
    <div>
      {" "}
      {userWishlistBooks.length > 0 ? (
        <div className="flex flex-col gap-7 justify-center">
          <Heading size="9" weight="light">
            WaitList
          </Heading>
          <div className="flex flex-col gap-7">
            {userWishlistBooks
              .sort((a, b) => a.position - b.position)
              .map((bookWaitList) => (
                <div
                  key={`${bookWaitList.bookId} ${bookWaitList.libraryId}`}
                  className="flex flex-col gap-2"
                >
                  {" "}
                  <WaitlistBook
                    key={`${bookWaitList.bookId} ${bookWaitList.libraryId}`}
                    bookWaitList={bookWaitList}
                  />
                  <Separator my="3" size="4" />
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <Text>Your waitList is empty - go explore !</Text>
          <Button onClick={(e) => navigateToHomePage()}>EXPLORE!</Button>
        </div>
      )}
    </div>
  );
}
