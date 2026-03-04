import {
  Avatar,
  Box,
  Button,
  Flex,
  TextArea,
  TextField,
} from "@radix-ui/themes";
// import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useLoginUserId } from "~/global/zustand/loginUserId";
import { users } from "~/mockData/User";
import ProfileHoverCard from "./profile/profileHoverCard";
import { useState } from "react";

function MainAppBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const navigateToHomePage = () => {
    navigate("");
  };

  const navigateToSearchTerm = () => {
    navigate(`/search/${searchTerm}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchTerm("");
      navigateToSearchTerm();
    }
  };

  return (
    <div className="flex flex-row gap-5 p-7">
      <div onClick={(e) => navigateToHomePage()}>
        <Avatar fallback={"L"} />
      </div>
      <TextField.Root
        placeholder="Search by book name or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      >
        <TextField.Slot>{/* <Search /> */}</TextField.Slot>
      </TextField.Root>
      <ProfileHoverCard />
    </div>
  );
}

export default MainAppBar;
