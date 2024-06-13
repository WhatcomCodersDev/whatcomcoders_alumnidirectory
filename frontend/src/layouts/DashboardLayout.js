import { Outlet, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import NavBar from "components/NavBar";
import FootBar from "components/FootBar";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import DiscordIcon from "@mui/icons-material/Chat";
import ProfileIcon from "@mui/icons-material/Person";
import { Dashboard } from "@mui/icons-material";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
  minHeight: "80vh", // Ensure at least full viewport height
}));

const Sidebar = styled(Drawer)(({ theme }) => ({
  width: 240, // Set the width of the sidebar
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    top: "64px", // Offset to account for NavBar height
    bottom: "64px", // Offset to account for FootBar height
  },
}));

const SidebarContent = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  // backgroundColor: "#ffffff", // Set sidebar background color to white
  height: "100%",
}));

const Content = styled(Box)(({ theme }) => ({
  flex: "1", // This makes the content grow and fill available space, pushing the FootBar down
  marginTop: "64px", // Adjust based on NavBar height to prevent overlap
  marginBottom: "64px", // Adjust based on FootBar height to prevent overlap
  // backgroundColor: "#ffffff", // Set content background color to white
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
}));

const DashboardLayout = () => {
  return (
    <Root>
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "row", flex: "1" }}>
        <Sidebar variant="permanent" anchor="left">
          <SidebarContent>
            <Typography variant="h6" noWrap>
              Spaced Repetition
            </Typography>
            <List>
              <ListItem component={Link} to="/leetcode/all">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="All Problems" />
              </ListItem>
              <ListItem component={Link} to="/leetcode/review">
                <ListItemIcon>
                  <AnalyticsIcon />
                </ListItemIcon>
                <ListItemText primary="Review" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AnalyticsIcon />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
              </ListItem>
              {/* <ListItem button>
                <ListItemIcon>
                  <DiscordIcon />
                </ListItemIcon>
                <ListItemText primary='Join the discord' />
              </ListItem> */}
              <ListItem button>
                <ListItemIcon>
                  <ProfileIcon />
                </ListItemIcon>
                <ListItemText primary="Admin" />
              </ListItem>
            </List>
          </SidebarContent>
        </Sidebar>
        <Content>
          <Outlet />
        </Content>
      </Box>
      <FootBar />
    </Root>
  );
};

export default DashboardLayout;
