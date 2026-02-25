import { Button, Heading, Separator, Table, Text } from "@radix-ui/themes";
import React from "react";
import { useNavigate } from "react-router";
import LoanHistory from "~/features/loan/loanHistory";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import { loansData } from "~/mockData/Loans";
import { getUserLoans } from "~/Services/user";

function UserLoansHistory() {
  const loginUserId = useLoginUserId((state) => state.loginUserId);
  const navigate = useNavigate();

  const userLoans = getUserLoans(loginUserId);

  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      {" "}
      {userLoans.length > 0 ? (
        <div className="flex flex-col gap-7 justify-center">
          <Heading size="9" weight="light">
            Loan history
          </Heading>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Library name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Book name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Borrow date</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Return date</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {userLoans.map((loan) => (
                <LoanHistory loan={loan} />
              ))}
            </Table.Body>
          </Table.Root>{" "}
        </div>
      ) : (
        <div className="flex flex-col">
          <Text>Your loans history is empty - go explore !</Text>
          <Button onClick={(e) => navigateToHomePage()}>EXPLORE!</Button>
        </div>
      )}
    </div>
  );
}

export default UserLoansHistory;
