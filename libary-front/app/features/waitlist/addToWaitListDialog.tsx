import { Button, CheckboxGroup, Dialog, RadioGroup } from "@radix-ui/themes";
import React, { useState } from "react";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import type { Library } from "~/mockData/Library";
import { getLibrariesByLibrariesId } from "~/Services/library";
import { getUserLibrariesId } from "~/Services/user";

interface addToWaitListDialogProps {
  isBookAvailableNow: boolean;
  avlLibrariesForBook?: Library[];
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

  const addToWaitList = () => {
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

            <div>
              <CheckboxGroup.Root
                name="library"
                value={libraryToWaitList}
                onValueChange={setLibraryToWaitList}
              >
                {userLibraries.map((library) => (
                  <CheckboxGroup.Item value={library.id}>
                    {library.name}{" "}
                    {!props.isBookAvailableNow ||
                    isBookAvailableInLibrary(library.id)
                      ? ""
                      : "(the book is not available now in this library, you will be added to the waitlist)"}
                  </CheckboxGroup.Item>
                ))}
              </CheckboxGroup.Root>

              <Button onClick={() => addToWaitList()}>add to waitlist</Button>
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
