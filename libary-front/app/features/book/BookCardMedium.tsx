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
import type { Book } from "~/mockData/Book";
import { bookGenres } from "~/mockData/BookToGanre";
import { genres, type Genre } from "~/mockData/Genre";
import { getBookGenres } from "~/Services/book";
import BookImage from "./BookImage";

interface BookCardMediumProps {
  book: Book;
}

function BookCardMedium(props: BookCardMediumProps) {
  const navigate = useNavigate();

  const thisBooksGenres = getBookGenres(props.book.id, true);

  const navigateToBookPage = () => {
    navigate(`/${props.book.id}`);
  };

  const navigateToAuthorPage = () => {
    navigate(`/author/${props.book.author}`);
  };

  const navigateToGenrePage = (genre: Genre) => {
    navigate(`/genre/${genre.name}`);
  };

  return (
    <div className="flex flex-row gap-5">
      <BookImage
        book={props.book}
        isNavigable={true}
        isAvailabilityDisplay={true}
        size={"medium"}
      />

      <div className="flex flex-col gap-3">
        <div>
          <Text onClick={(e) => navigateToBookPage()}>
            <Strong>{props.book.name}</Strong>
          </Text>
        </div>
        <div onClick={(e) => navigateToAuthorPage()}>
          <Text>{props.book.author}</Text>
        </div>
        <div className="flex gap-3">
          {thisBooksGenres.map((genre) => (
            <Badge
              onClick={(e) => navigateToGenrePage(genre)}
              key={genre.name}
              radius="full"
              size="2"
              variant={genre.isMainGenre ? "solid" : "outline"}
            >
              {genre.name}
            </Badge>
          ))}
        </div>
        <div>
          <Text>{props.book.summeryInSentence}</Text>
        </div>
      </div>
    </div>
  );
}

export default BookCardMedium;
