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
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faUser } from "@fortawesome/free-solid-svg-icons";

// Styled AppBar component
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  display: "flex", // Using flexbox for the navbar layout
}));

// Styled Link component
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  border: "3px solid",
  borderRadius: "5%",
  padding: "10px",
  color: theme.palette.text.primary,
  marginRight: "20px", // Consistent spacing between elements
  verticalAlign: "middle", // Aligning items in the middle vertically
  "&:last-child": {
    marginRight: 0, // Removing margin from the last item
  },
  "&:hover": {
    color: "#ccc", // Lighter color on hover
  },
}));

const NavBar = () => {
  const { isLoggedIn, userName, logout, userProfilePic } =
    useContext(AuthContext);

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ minHeight: 64 }}>
        <Logo />
        <Box display="flex" flexGrow={1}>
          <StyledLink to={"/resources"} component={RouterLink}>
            Resources
            <FontAwesomeIcon icon={faCompass} />
          </StyledLink>
          <StyledLink component={RouterLink} to={"/people"}>
            People
            <FontAwesomeIcon icon={faUser} />
          </StyledLink>

          <StyledLink component={RouterLink} to={"/leetcode"}>
            Leetcode
          </StyledLink>

          <StyledLink component={RouterLink} to={"/bootstrap"}>
            Bootstrap
          </StyledLink>
        </Box>

        <Box display="flex">
          {isLoggedIn ? (
            <>
              <StyledLink>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/userinfo"
                  sx={{ color: "white", display: "flex", alignItems: "center" }}
                >
                  {userProfilePic && (
                    <Avatar
                      src={userProfilePic}
                      sx={{ width: 24, height: 24, marginRight: 1 }}
                    />
                  )}
                  {userName}{" "}
                </Button>
              </StyledLink>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <StyledLink>
              <Button color="inherit" component={RouterLink} to="/login">
                Login
              </Button>
            </StyledLink>
          )}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
