import { Button, Heading, Separator, Text } from "@radix-ui/themes";
import React from "react";
import { useNavigate } from "react-router";
import BookCardMedium from "~/features/book/BookCardMedium";
import CurrentLoan from "~/features/loan/currentLoan";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import { books } from "~/mockData/Book";
import { loansData } from "~/mockData/Loans";
import { getUserLoans } from "~/Services/user";

function UserLoans() {
  const loginUserId = useLoginUserId((state) => state.loginUserId);
  const navigate = useNavigate();

  const userLoans = getUserLoans(loginUserId, true);

  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      {" "}
      {userLoans.length > 0 ? (
        <div className="flex flex-col gap-7 justify-center">
          <Heading size="9" weight="light">
            My books
          </Heading>
          <div className="flex flex-col gap-7">
            {userLoans.map((loan) => (
              <div className="flex flex-col gap-2">
                {" "}
                <CurrentLoan loan={loan} />
                <Separator my="3" size="4" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <Text>Your loan list is empty - go explore !</Text>
          <Button onClick={(e) => navigateToHomePage()}>EXPLORE!</Button>
        </div>
      )}
    </div>
  );
}

export default UserLoans;
