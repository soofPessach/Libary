import {
  Avatar,
  Button,
  HoverCard,
  Popover,
  Separator,
  Text,
} from "@radix-ui/themes";
import React from "react";
import { useNavigate } from "react-router";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import { users } from "~/mockData/User";
import { getUserByUserId } from "~/Services/user";

function ProfileHoverCard() {
  const navigate = useNavigate();

  const loginUserId = useLoginUserId((state) => state.loginUserId);
  const loginUser = getUserByUserId(loginUserId);

  const navigateToWaitListPage = () => {
    navigate("/waitlist");
  };

  const navigateToUserLoansPage = () => {
    navigate("/userLoans");
  };

  const navigateToUserLoansHistoryPage = () => {
    navigate("/userLoansHIstory");
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="ghost">
          <Avatar fallback={loginUser?.name.charAt(0) ?? "U"} />
        </Button>
      </Popover.Trigger>
      <Popover.Content width="360px">
        <Text>{loginUser?.name}</Text>
        <Separator my="3" size="4" />
        <Text>update info</Text>
        <Separator my="3" size="4" />
        <Text onClick={(e) => navigateToWaitListPage()}>waitlist</Text>
        <Separator my="3" size="4" />
        <Text onClick={(e) => navigateToUserLoansPage()}>my books</Text>
        <Separator my="3" size="4" />
        <Text onClick={(e) => navigateToUserLoansHistoryPage()}>History</Text>
        <Separator my="3" size="4" />
        <Text>log out</Text>
      </Popover.Content>
    </Popover.Root>
  );
}

export default ProfileHoverCard;
