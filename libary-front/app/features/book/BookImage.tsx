import { Inset } from "@radix-ui/themes";
import React from "react";
import { useNavigate } from "react-router";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import type { Book } from "~/mockData/Book";
import { isBookAvailableForUser } from "~/Services/user";

interface bookImageProps {
  book: Book;
  isNavigable: boolean;
  isAvailabilityDisplay: boolean;
  size: "small" | "medium" | "large";
}

function BookImage(props: bookImageProps) {
  const loginUserId = useLoginUserId((state) => state.loginUserId);

  const navigate = useNavigate();

  const navigateToBookPage = () => {
    navigate(`/${props.book.id}`);
  };

  return (
    <Inset clip="padding-box" side="top" pb="current">
      <img
        onClick={(e) => props.isNavigable && navigateToBookPage()}
        className={`${props.size === "large" ? "w-95 h-105" : props.size == "medium" ? "w-45 h-55" : "w-30 h-45"} rounded-[10px] 
        ${props.isAvailabilityDisplay ? `border-4 ${isBookAvailableForUser(loginUserId, props.book.id) ? " border-green-500" : "border-red-500"}` : ""} ${props.isNavigable ? "cursor-pointer" : ""}`}
        src={props.book.bookCoverSrc}
        alt="Header"
      />
    </Inset>
  );
}

export default BookImage;
