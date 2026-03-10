import { Button, Flex, TextField } from "@radix-ui/themes";
import {
  BookmarkIcon,
  DiscordLogoIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router";
import ProfileHoverCard from "./profile/profileHoverCard";
import { useState } from "react";

function MainAppBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const navigateToHomePage = () => {
    navigate("/");
  };

  const navigateToSearchTerm = () => {
    if (!searchTerm.trim()) return;
    navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchTerm("");
      navigateToSearchTerm();
    }
  };

  return (
    <Flex align="center" justify="between" className="h-16 gap-4">
      <Button
        variant="ghost"
        onClick={navigateToHomePage}
        className="h-10 w-10 rounded-full"
        aria-label="Home"
        title="Go to home"
      >
        <DiscordLogoIcon className="h-5 w-5 cursor-pointer" />
      </Button>

      <TextField.Root
        placeholder="Search by book name or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 max-w-xl"
      >
        <TextField.Slot>
          <MagnifyingGlassIcon className="text-slate-500" />
        </TextField.Slot>
      </TextField.Root>

      <ProfileHoverCard />
    </Flex>
  );
}

export default MainAppBar;
