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
import { getBookByBookId } from "~/Services/book";
import BookImage from "../book/BookImage";

interface currentLoanProps {
  loan: Loan;
}

function CurrentLoan(props: currentLoanProps) {
  const navigate = useNavigate();

  const book = getBookByBookId(props.loan.bookId);

  const navigateToBookPage = () => {
    book && navigate(`/${book.id}`);
  };

  const getDaysSinceDate = (date: Date) =>
    Math.ceil((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

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
          <Text onClick={(e) => navigateToBookPage()}>
            <Strong>{book?.name}</Strong>
          </Text>
        </div>
        <div>
          <Text>{book?.author}</Text>
        </div>
        <div>
          due in:{" "}
          <Text
            className={`${getDaysSinceDate(props.loan.dueDate) < 0 ? "text-red-500" : getDaysSinceDate(props.loan.dueDate) < 7 ? "text-yellow-500" : ""}`}
          >
            {getDaysSinceDate(props.loan.dueDate)} days
          </Text>
        </div>

        {getDaysSinceDate(props.loan.dueDate) < 7 ? (
          <Button
            className="rounded-full"
            onClick={(e) => navigateToBookPage()}
          >
            renew load
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default CurrentLoan;
