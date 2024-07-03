import React from "react";
import { styled } from "@mui/material";
import { Avatar, Button, Box } from "@mui/material";

const NavButton = ({ sx, text, url, icon, children, onClick, ...rest }) => {
  return (
    <Button
      sx={{
        fontSize: "1.1rem",
        color: "rgb(0,63,135,80%)",
        ...sx,
      }}
      href={url}
      variant="text"
      endIcon={icon}
      onClick={onClick}
    >
      {text}
      {children}
    </Button>
  );
};

const LandingButton = ({ sx, text, url, icon, children, onClick, ...rest }) => {
  return (
    <Button
      sx={{
        borderRadius: 2.5,
        border: "2px solid",
        "&:hover": {
          border: "2px solid",
        },
        color: "white",
        width: "45%",
        justifyContent: "space-between",
        fontSize: "1.15rem",
        px: 3,
        py: 2.5,
        ...sx,
      }}
      href={url}
      variant="outlined"
      endIcon={icon}
      onClick={onClick}
    >
      {text}
      {children}
    </Button>
  );
};

const LoginButton = ({
  isLoggedIn,
  userProfilePic,
  userName,
  text,
  url,
  icon,
  children,
  logout,
  ...rest
}) => {
  return (
    <Box display="flex">
      {isLoggedIn ? (
        <NavButton url="/userinfo">
          {userProfilePic && (
            <Avatar
              src={userProfilePic}
              sx={{ width: 24, height: 24, marginRight: 1 }}
            />
          )}
          {userName}{" "}
        </NavButton>
      ) : (
        <NavButton text="login" url="/login" onClick={logout} />
      )}
    </Box>
  );
};

export { NavButton, LandingButton, LoginButton };
