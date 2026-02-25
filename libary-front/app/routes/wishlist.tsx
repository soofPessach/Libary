import { useNavigate, useParams } from "react-router";
import { useMemo } from "react";
import { bookGenres } from "~/mockData/BookToGanre";
import { books } from "~/mockData/Book";
import BookCardMedium from "~/features/book/BookCardMedium";
import { Button, Heading, Separator, Text } from "@radix-ui/themes";
import { wishlistData } from "~/mockData/Wishlist";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import { getUserWishList } from "~/Services/user";

export default function Wishlist() {
  const loginUserId = useLoginUserId((state) => state.loginUserId);

  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/");
  };

  const userWishlistBooks = getUserWishList(loginUserId);

  return (
    <div>
      {" "}
      {userWishlistBooks.length > 0 ? (
        <div className="flex flex-col gap-7 justify-center">
          <Heading size="9" weight="light">
            WishList
          </Heading>
          <div className="flex flex-col gap-7">
            {userWishlistBooks.map((book) => (
              <div className="flex flex-col gap-2">
                {" "}
                <BookCardMedium book={book} />
                <Separator my="3" size="4" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <Text>Your wishlist is empty - go explore !</Text>
          <Button onClick={(e) => navigateToHomePage()}>EXPLORE!</Button>
        </div>
      )}
    </div>
  );
}
