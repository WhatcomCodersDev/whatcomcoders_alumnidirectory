import "../styles/theme.css";
import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import Logo from "./Logo";

const NavBar = () => {
  const { isLoggedIn, userName, logout } = useContext(AuthContext);

  return (
    <AppBar
      style={{
        background: "#000",
      }}
      className="appbar"
      position="static"
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <Logo />
        <Box display="flex" flexGrow={1}>
          <Typography
            variant="h6"
            style={{ marginRight: "20px" }}
            component={Link}
            to="/"
          ></Typography>
          <Typography
            variant="h6"
            component={Link}
            to="/about"
            style={{ marginRight: "20px" }}
          >
            About
          </Typography>
          <Typography variant="h6" component={Link} to="/people">
            People
          </Typography>
        </Box>
        <Box display="flex">
          {isLoggedIn ? (
            <>
              <Button color="inherit" component={Link} to="/userinfo">
                {userName}
              </Button>
              {/* This is the new logout button */}
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
