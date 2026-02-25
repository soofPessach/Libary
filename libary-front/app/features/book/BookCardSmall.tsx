import { Box, Card, Inset, Strong, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router";
import type { Book } from "~/mockData/Book";
import BookImage from "./BookImage";

interface BookCardSmallProps {
  book: Book;
}

function BookCardSmall(props: BookCardSmallProps) {
  let navigate = useNavigate();

  const onBookClick = () => {
    navigate(`/${props.book.id}`);
  };

  return (
    <div onClick={(e) => onBookClick()}>
      <BookImage
        book={props.book}
        isNavigable={true}
        size={"small"}
        isAvailabilityDisplay={true}
      />
      <div>
        <Text>
          <Strong>{props.book.name}</Strong>
        </Text>
      </div>
      <div>
        <Text>{props.book.author}</Text>
      </div>
    </div>
  );
}

export default BookCardSmall;
