import { Outlet, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import NavBar from 'components/NavBar';
import FootBar from 'components/FootBar';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ProfileIcon from '@mui/icons-material/Person';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.default,
}));

const Sidebar = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
    top: '128px',
    bottom: 0,
    position: 'absolute',
  },
}));

const SidebarContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#ffffff',
  height: '100%',
}));

const MainContent = styled('main')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  marginTop: '64px', // Adjust based on NavBar height to prevent overlap
  paddingBottom: '64px', // Add padding to account for FootBar height
  backgroundColor: '#ffffff',
  padding: theme.spacing(3),
  overflowY: 'auto',
}));

const BootstrapLayout = () => {
  return (
    <Root>
      <NavBar />
      <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <Sidebar variant='permanent' anchor='left'>
          <SidebarContent>
            <Typography variant='h6' noWrap>
              Bootstrap
            </Typography>
            <List>
              <ListItem component={Link} to='/bootstrap/all'>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='All Bootstrap Services' />
              </ListItem>
              <ListItem component={Link} to='/bootstrap/form'>
                {/* TODO: adjust to  in the future */}
                <ListItemIcon>
                  <AnalyticsIcon />
                </ListItemIcon>
                <ListItemText primary='Request New Bootstrap Service' />
              </ListItem>
              {/* <ListItem button>
                <ListItemIcon>
                  <AnalyticsIcon />
                </ListItemIcon>
                <ListItemText primary='Analytics' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ProfileIcon />
                </ListItemIcon>
                <ListItemText primary='Admin' />
              </ListItem> */}
            </List>
          </SidebarContent>
        </Sidebar>
        <MainContent>
          <Outlet />
        </MainContent>
      </Box>
      <FootBar />
    </Root>
  );
};

export default BootstrapLayout;
