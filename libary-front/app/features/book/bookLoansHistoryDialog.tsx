import {
  Button,
  CheckboxGroup,
  Dialog,
  RadioGroup,
  Table,
} from "@radix-ui/themes";
import React, { useState } from "react";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import type { Loan } from "~/mockData/Loans";
import { getLibraryByLibraryId } from "~/Services/library";
import { getUserBookLoanHistory } from "~/Services/user";

interface bookLoansHistoryDialogProps {
  bookId: string;
}

function BookLoansHistoryDialog(props: bookLoansHistoryDialogProps) {
  const loginUserId = useLoginUserId((state) => state.loginUserId);

  const userBookLoansHistory = getUserBookLoanHistory(
    loginUserId,
    props.bookId,
  );

  return (
    <div>
      {userBookLoansHistory.length > 0 ? (
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="ghost">Loans history</Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title>Loans history</Dialog.Title>
            <div>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>borrow date</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>library</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {userBookLoansHistory.map((bookLoan) => (
                    <Table.Row>
                      <Table.RowHeaderCell>
                        {bookLoan.borrowDate.toDateString()}
                      </Table.RowHeaderCell>
                      <Table.Cell>
                        {getLibraryByLibraryId(bookLoan.libraryId)?.name}
                      </Table.Cell>
                    </Table.Row>
                  ))}{" "}
                </Table.Body>
              </Table.Root>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BookLoansHistoryDialog;
