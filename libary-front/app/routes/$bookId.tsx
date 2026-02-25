import React from "react";
import { useNavigate, useParams } from "react-router";
import BookCardLarge from "~/features/book/BookCardLarge";
import BookCardSmall from "~/features/book/BookCardSmall";
import { books } from "~/mockData/Book";
import { getBookByBookId } from "~/Services/book";

export default function Book() {
  let navigate = useNavigate();

  const { bookId } = useParams();

  const book = getBookByBookId(bookId ?? "");

  if (!book) navigate(-1);
  return <div>{book ? <BookCardLarge book={book} /> : "book not found"}</div>;
}
