import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import {
  Avatar,
  AppBar,
  Toolbar,
  Link,
  Typography,
  Button,
  Box,
  Stack,
} from '@mui/material';
import { AuthContext } from '../contexts/authContext';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faUser } from '@fortawesome/free-solid-svg-icons';
import CustomCoreIcon from './CustomCoreIcon';
import { NavButton, LoginButton } from './CustomButton';

// Styled AppBar component
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
}));

const NavBar = () => {
  const { isLoggedIn, userName, logout, userProfilePic } =
    useContext(AuthContext);

  return (
    <StyledAppBar position='sticky'>
      <Toolbar sx={{ minHeight: 60 }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ width: '100%' }}
        >
          <Logo />
          <Stack
            direction='row'
            spacing={4}
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <NavButton
              text='Resources'
              url='/resources'
              icon={<FontAwesomeIcon icon={faCompass} />}
            />
            <NavButton
              text='People'
              url='/people'
              icon={<FontAwesomeIcon icon={faUser} />}
            />
            <NavButton
              text='Leetcode'
              url='/leetcode'
              icon={<CustomCoreIcon iconName='cibLeetcode' />}
            />
            <NavButton text='Bootstrap' url='/bootstrap/all' />
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
