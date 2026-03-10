import {
  Avatar,
  Button,
  Flex,
  Popover,
  Separator,
  Text,
} from "@radix-ui/themes";
import React from "react";
import { useNavigate } from "react-router";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import { getUserByUserId } from "~/Services/user";

function ProfileHoverCard() {
  const navigate = useNavigate();

  const loginUserId = useLoginUserId((state) => state.loginUserId);
  const loginUser = getUserByUserId(loginUserId);

  const navigateToUpdateInfoPage = () => {
    navigate("/updateInfo");
  };

  const navigateToWaitListPage = () => {
    navigate("/waitlist");
  };

  const navigateToUserLoansPage = () => {
    navigate("/userLoans");
  };

  const navigateToUserLoansHistoryPage = () => {
    navigate("/userLoansHistory");
  };

  const navigateToLogoutPage = () => {
    navigate("/logout");
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="ghost">
          <Avatar fallback={loginUser?.name.charAt(0) ?? "U"} />
        </Button>
      </Popover.Trigger>

      <Popover.Content width="320px" className="p-4">
        <Flex direction="column" gap="3">
          <Text weight="bold" size="3">
            {loginUser?.name}
          </Text>

          <Separator my="2" size="3" />

          <Button
            variant="ghost"
            onClick={navigateToUpdateInfoPage}
            className="justify-start"
          >
            Update info
          </Button>
          <Button
            variant="ghost"
            onClick={navigateToWaitListPage}
            className="justify-start"
          >
            Waitlist
          </Button>
          <Button
            variant="ghost"
            onClick={navigateToUserLoansPage}
            className="justify-start"
          >
            My books
          </Button>
          <Button
            variant="ghost"
            onClick={navigateToUserLoansHistoryPage}
            className="justify-start"
          >
            History
          </Button>

          <Separator my="2" size="3" />

          <Button
            variant="ghost"
            onClick={navigateToLogoutPage}
            className="justify-start text-red-600"
          >
            Log out
          </Button>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
}

export default ProfileHoverCard;
