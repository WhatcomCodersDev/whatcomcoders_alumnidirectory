import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import NavBar from "components/NavBar";
import FootBar from "components/FootBar";
// import useAuth from 'hooks/useAuth';

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.primary.default,
  minHeight: "100vh", // Ensure at least full viewport height
  // flex: '1 1 auto',
}));

const Content = styled("div")(({ theme }) => ({
  flex: "1", // This makes the content grow and fill available space, pushing the FootBar down
}));

const LandingLayout = () => {
  //   const { user, logout } = useAuth();

  // top bar open state & function
  // const [, setMobileNavOpen] = useState(false);
  // const onMobileNavOpen = () => {
  //   setMobileNavOpen(true);
  // };
  
  return (
    <Root>
      <NavBar />
      <Content>
        <Outlet />
      </Content>
      <FootBar />
    </Root>
  );
};

export default LandingLayout;
