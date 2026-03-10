import { Button, CheckboxGroup, Dialog, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import type { Library } from "~/mockData/Library";
import { getBookInLibraryWaitlistNextPlace } from "~/Services/book";
import { getLibrariesByLibrariesId } from "~/Services/library";
import { getUserLibrariesId } from "~/Services/user";

interface addToWaitListDialogProps {
  isBookAvailableNow: boolean;
  avlLibrariesForBook?: Library[];
  bookId: string;
}

function AddToWaitListDialog(props: addToWaitListDialogProps) {
  const loginUserId = useLoginUserId((state) => state.loginUserId);
  const userLibrariesId = getUserLibrariesId(loginUserId);
  const userLibraries = getLibrariesByLibrariesId(userLibrariesId);

  const [libraryToWaitList, setLibraryToWaitList] = useState(
    props.isBookAvailableNow && props.avlLibrariesForBook
      ? props.avlLibrariesForBook.map((library) => library.id)
      : userLibrariesId,
  );

  const isBookAvailableInLibrary = (libraryId: string) => {
    return props.avlLibrariesForBook?.some(
      (library) => library.id === libraryId,
    );
  };

  const isAddToWaitlistValid = () => {
    const isFirstInLine = libraryToWaitList.some(
      (newWaitLibraryId) =>
        getBookInLibraryWaitlistNextPlace(props.bookId, newWaitLibraryId) === 1,
    );

    const isNotFirstInLine = libraryToWaitList.some(
      (newWaitLibraryId) =>
        getBookInLibraryWaitlistNextPlace(props.bookId, newWaitLibraryId) !==
          1 &&
        getBookInLibraryWaitlistNextPlace(props.bookId, newWaitLibraryId) !==
          999,
    );

    return isFirstInLine !== isNotFirstInLine;
  };

  const addToWaitList = () => {
    if (!isAddToWaitlistValid()) console.log("add isnt valid");
    //TODO - add to waitlist
  };

  return (
    <div>
      {userLibraries.length > 1 ? (
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>
              {props.isBookAvailableNow
                ? "save book for me"
                : "add to waitlist"}
            </Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title>
              {" "}
              {props.isBookAvailableNow
                ? "Save book for me"
                : "Add to waitlist"}
            </Dialog.Title>
            <Dialog.Description size="2" mb="4">
              specific library?
            </Dialog.Description>

            <div className="flex flex-col gap-5">
              <CheckboxGroup.Root
                name="library"
                value={libraryToWaitList}
                onValueChange={setLibraryToWaitList}
              >
                {userLibraries.map((library) => (
                  <CheckboxGroup.Item key={library.id} value={library.id}>
                    {library.name}{" "}
                    {getBookInLibraryWaitlistNextPlace(
                      props.bookId,
                      library.id,
                    ) !== 999 &&
                    getBookInLibraryWaitlistNextPlace(
                      props.bookId,
                      library.id,
                    ) > 0
                      ? `-${getBookInLibraryWaitlistNextPlace(props.bookId, library.id)} in line`
                      : ""}
                    {!props.isBookAvailableNow ||
                    isBookAvailableInLibrary(library.id)
                      ? ""
                      : "(the book is not available now in this library, you will be added to the waitlist)"}
                  </CheckboxGroup.Item>
                ))}
              </CheckboxGroup.Root>
              <div className="flex flex-col gap-2">
                <Button
                  disabled={!isAddToWaitlistValid()}
                  onClick={() => addToWaitList()}
                >
                  add to waitlist
                </Button>
                <Text color="red" size="1">
                  {libraryToWaitList.length === 0
                    ? "you must chose a library"
                    : !isAddToWaitlistValid()
                      ? "you cant be first in line and on others lines to the same book"
                      : ""}
                </Text>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      ) : (
        <Button onClick={() => addToWaitList()}>add to waitlist</Button>
      )}
    </div>
  );
}

export default AddToWaitListDialog;
