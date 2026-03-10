import React, { useEffect } from "react";
import MainAppBar from "./mainAppBar/mainAppBar";
import { Theme } from "@radix-ui/themes";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import Login from "~/routes/login";
import { useNavigate } from "react-router";

interface layoutProps {
  children: React.ReactNode;
}

function Layout(props: layoutProps) {
  const loginUserId = useLoginUserId((state) => state.loginUserId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginUserId) navigate("/login");
  }, [loginUserId]);

  return (
    <div>
      <Theme>
        {loginUserId ? (
          <div>
            <MainAppBar />
            <div className="bg-blue-100 pr-40 pl-40 p-10">{props.children}</div>
          </div>
        ) : (
          <Login />
        )}
      </Theme>
    </div>
  );
}

export default Layout;
