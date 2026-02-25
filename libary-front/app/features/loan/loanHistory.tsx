import { Table } from "@radix-ui/themes";
import React from "react";
import { books } from "~/mockData/Book";
import { librariesData } from "~/mockData/Library";
import type { Loan } from "~/mockData/Loans";
import { getBookByBookId } from "~/Services/book";
import { getLibraryByLibraryId } from "~/Services/library";

interface loanHistoryProps {
  loan: Loan;
}
function LoanHistory(props: loanHistoryProps) {
  const book = getBookByBookId(props.loan.bookId);

  const library = getLibraryByLibraryId(props.loan.libraryId);

  return (
    <Table.Row>
      <Table.RowHeaderCell>{library?.name}</Table.RowHeaderCell>
      <Table.Cell>{book?.name}</Table.Cell>
      <Table.Cell>{props.loan.borrowDate.toDateString()}</Table.Cell>
      <Table.Cell>{props.loan.returnDate.toDateString()}</Table.Cell>
    </Table.Row>
  );
}

export default LoanHistory;
