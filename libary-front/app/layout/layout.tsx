import React from "react";
import MainAppBar from "./mainAppBar/mainAppBar";
import { Theme } from "@radix-ui/themes";

interface layoutProps {
  children: React.ReactNode;
}

function Layout(props: layoutProps) {
  return (
    <div>
      <Theme>
        <MainAppBar />
        <div className="bg-blue-100 pr-40 pl-40 p-10">{props.children}</div>
      </Theme>
    </div>
  );
}

export default Layout;
