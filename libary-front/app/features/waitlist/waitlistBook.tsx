import {
  Badge,
  Box,
  Button,
  Card,
  Inset,
  Strong,
  Text,
  TextArea,
} from "@radix-ui/themes";
import { useNavigate } from "react-router";
import { books, type Book } from "~/mockData/Book";
import { bookGenres } from "~/mockData/BookToGanre";
import { genres, type Genre } from "~/mockData/Genre";
import type { Loan } from "~/mockData/Loans";
import { getBookByBookId, isBookInLibraryOnWaitList } from "~/Services/book";
import BookImage from "../book/BookImage";
import { renewLoan } from "~/Services/loan";
import type { BookWaitlist } from "~/mockData/BookWaitlist";

interface waitlistBookProps {
  bookWaitList: BookWaitlist;
}

function WaitlistBook(props: waitlistBookProps) {
  const navigate = useNavigate();

  const book = getBookByBookId(props.bookWaitList.bookId);

  const navigateToBookPage = () => {
    book && navigate(`/${book.id}`);
  };

  const onCancelWaitClicked = () => {
    // cancelWait();
  };
  return (
    <div className="flex flex-row gap-5">
      {book && (
        <BookImage
          book={book}
          isNavigable={true}
          isAvailabilityDisplay={false}
          size={"medium"}
        />
      )}
      <div className="flex flex-col gap-3">
        <div>
          <Text
            onClick={(e) => navigateToBookPage()}
            className="cursor-pointer"
          >
            <Strong>{book?.name}</Strong>
          </Text>
        </div>
        <div>
          <Text>{book?.author}</Text>
        </div>

        {props.bookWaitList.position === 0 ? (
          <Badge>Waiting for you to take</Badge>
        ) : props.bookWaitList.position === 1 ? (
          <Badge color="grass" size="3">
            You are next in line!
          </Badge>
        ) : (
          <> place in line: {props.bookWaitList.position}</>
        )}

        <Button
          className="cursor-pointer"
          onClick={() => onCancelWaitClicked()}
        >
          Cancel wait
        </Button>
      </div>
    </div>
  );
}

export default WaitlistBook;
