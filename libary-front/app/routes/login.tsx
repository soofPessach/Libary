import { useState } from "react";
import { Button, Card, Heading, Text, TextField } from "@radix-ui/themes";
import { Theme } from "@radix-ui/themes";
import { getUserByEmailPassword } from "~/Services/user";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import { useNavigate } from "react-router";

export default function Login() {
  const setLoginUser = useLoginUserId((state) => state.setLoginUser);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  function handleLogin() {
    const loginUser = getUserByEmailPassword(email, password);

    if (!loginUser) setLoginFailed(true);
    else {
      setLoginFailed(false);
      setLoginUser(loginUser.id);
      navigate("/");
    }
  }

  return (
    <Theme>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
        <Card size="3" className="w-full max-w-md shadow-lg">
          <div className="flex flex-col gap-5 p-6">
            <Heading size="6" align="center">
              Library Login
            </Heading>

            <div className="flex flex-col gap-1">
              <Text as="label" size="2" weight="medium" htmlFor="email">
                Email
              </Text>
              <TextField.Root
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <Text as="label" size="2" weight="medium" htmlFor="password">
                Password
              </Text>
              <TextField.Root
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button size="3" onClick={handleLogin} className="w-full">
              Log In
            </Button>
            <Text color="red" size="1" className="text-center">
              {loginFailed ? "Email or password are incorrect" : ""}
            </Text>
          </div>
        </Card>
      </div>
    </Theme>
  );
}
