import { AlertDialog, Button, Flex, Theme } from "@radix-ui/themes";
import { useNavigate } from "react-router";
import { useLoginUserId } from "~/global/zustand/loginUserId";

export default function Logout() {
  const setLoginUser = useLoginUserId((state) => state.setLoginUser);
  const navigate = useNavigate();

  function handleLogout() {
    setLoginUser("");
    navigate("/login");
  }

  return (
    <Theme>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <AlertDialog.Root defaultOpen>
          <AlertDialog.Content maxWidth="400px">
            <AlertDialog.Title>Log Out</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Are you sure you want to log out?
            </AlertDialog.Description>

            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button
                  variant="soft"
                  color="gray"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button color="red" onClick={handleLogout}>
                  Log Out
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </Theme>
  );
}
