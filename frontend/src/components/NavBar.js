import { styled } from "@mui/material/styles";
import React, { useContext } from "react";
import {
  Avatar,
  AppBar,
  Toolbar,
  Link,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { AuthContext } from "../contexts/authContext";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faUser } from "@fortawesome/free-solid-svg-icons";
import CustomCoreIcon from "./CustomCoreIcon";
import { NavButton, LoginButton } from "./CustomButton";

// Styled AppBar component
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  display: "flex", // Using flexbox for the navbar layout
}));

const NavBar = () => {
  const { isLoggedIn, userName, logout, userProfilePic } =
    useContext(AuthContext);

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ minHeight: 64 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack direction="row" spacing={3} alignItems="center">
            <Logo />
            <NavButton
              text="Resources"
              url="/resources"
              icon={<FontAwesomeIcon icon={faCompass} />}
            />
            <NavButton
              text="People"
              url="/people"
              icon={<FontAwesomeIcon icon={faUser} />}
            />
            <NavButton
              text="Leetcode"
              url="/leetcode"
              icon={<CustomCoreIcon iconName="cibLeetcode" />}
            />
            <NavButton text="Bootstrap" url="/bootstrap" />
          </Stack>
          <LoginButton
            isLoggedIn={isLoggedIn}
            userName={userName}
            userProfilePic={userProfilePic}
            onClick={logout}
          />
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
