import React from "react";
import { styled } from "@mui/material";
import { Avatar, Button, Box } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 25,
  border: "3px solid",
  "&:hover": {
    border: "3px solid",
  },
  height: 35,
  textTransform: "lowercase",
}));

const NavButton = ({ sx, text, url, icon, children, onClick, ...rest }) => {
  return (
    <StyledButton
      sx={sx}
      href={url}
      variant="outlined"
      endIcon={icon}
      onClick={onClick}
    >
      {text}
      {children}
    </StyledButton>
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

export { NavButton, LoginButton };
