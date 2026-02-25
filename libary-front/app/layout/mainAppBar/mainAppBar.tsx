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

function MainAppBar() {
  const loginUserId = useLoginUserId((state) => state.loginUserId);
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("");
  };

  const navigateToWishListPage = () => {
    navigate("/wishlist");
  };

  return (
    <div className="flex flex-row gap-5 p-7">
      <div onClick={(e) => navigateToHomePage()}>
        <Avatar fallback={"L"} />
      </div>
      <TextField.Root placeholder="Search by book name or author">
        <TextField.Slot>{/* <Search /> */}</TextField.Slot>
      </TextField.Root>
      <ProfileHoverCard />
      <Button>Menu</Button>
      <Button onClick={(e) => navigateToWishListPage()}>Wishlist</Button>
    </div>
  );
}

export default MainAppBar;
