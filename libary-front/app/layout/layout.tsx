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
    <Theme>
      {loginUserId ? (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
          <header className="sticky top-0  z-40 bg-white/80 backdrop-blur border-b border-slate-200">
            <div className="mx-auto max-w-6xl px-4">
              <MainAppBar />
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-10">{props.children}</main>
        </div>
      ) : (
        <Login />
      )}
    </Theme>
  );
}

export default Layout;
