import {
  Badge,
  Box,
  Button,
  Card,
  Inset,
  ScrollArea,
  Strong,
  Tabs,
  Text,
  TextArea,
} from "@radix-ui/themes";
import { useNavigate } from "react-router";
import type { Book } from "~/mockData/Book";
import { bookGenres } from "~/mockData/BookToGanre";
import { genres, type Genre } from "~/mockData/Genre";
import { getBookGenres } from "~/Services/book";
import { getBookIdAvlUserLibraries } from "~/Services/user";
import BookImage from "./BookImage";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import { useMemo } from "react";

interface BookCardLargeProps {
  book: Book;
}

function BookCardLarge(props: BookCardLargeProps) {
  const navigate = useNavigate();
  const loginUserId = useLoginUserId((state) => state.loginUserId);

  const thisBooksGenres = getBookGenres(props.book.id);

  const navigateToAuthorPage = () => {
    navigate(`/author/${props.book.author}`);
  };

  const navigateToGenrePage = (genre: Genre) => {
    navigate(`/genre/${genre.name}`);
  };

  const avlLibrariesForBook = getBookIdAvlUserLibraries(
    loginUserId,
    props.book.id,
  );

  return (
    <div>
      <div className="flex flex-row gap-5">
        <BookImage
          book={props.book}
          isNavigable={false}
          isAvailabilityDisplay={true}
          size={"large"}
        />
        <div className="flex flex-col gap-3">
          <div>
            <Text>
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

          <div>pages number: {props.book.pageNumber}</div>

          {avlLibrariesForBook.length > 0 ? (
            <div>
              available in:{" "}
              {getBookIdAvlUserLibraries(loginUserId, props.book.id).reduce(
                (pre, curr) => (pre += `${pre !== "" ? ", " : ""}${curr.name}`),
                "",
              )}
            </div>
          ) : (
            <Button>add to waitingList</Button>
          )}
        </div>
      </div>
      <Tabs.Root defaultValue="firstChapter">
        <Tabs.List>
          <Tabs.Trigger value="about">about</Tabs.Trigger>
          <Tabs.Trigger value="firstChapter">firstChapter</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="about">
          <Strong>Recap</Strong>
          <ScrollArea
            type="always"
            scrollbars="vertical"
            style={{ height: 100 }}
          >
            {props.book.summery}
          </ScrollArea>
        </Tabs.Content>

        <Tabs.Content value="firstChapter">
          <ScrollArea
            type="always"
            scrollbars="vertical"
            style={{ height: 100 }}
          >
            {props.book.firstChapter}
          </ScrollArea>{" "}
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

export default BookCardLarge;
