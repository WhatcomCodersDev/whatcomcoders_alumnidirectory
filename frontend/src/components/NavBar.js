import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import { AppBar, Toolbar, Link, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
import Logo from './Logo';

// Styled AppBar component
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  display: 'flex', // Using flexbox for the navbar layout
}));

// Styled Link component
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  marginRight: '20px', // Consistent spacing between elements
  verticalAlign: 'middle', // Aligning items in the middle vertically
  '&:last-child': {
    marginRight: 0, // Removing margin from the last item
  },
  '&:hover': {
    color: '#ccc', // Lighter color on hover
  },
}));

const NavBar = () => {
  const { isLoggedIn, userName, logout } = useContext(AuthContext);

  return (
    <StyledAppBar position='static'>
      <Toolbar sx={{ minHeight: 64 }}>
        <Logo />
        <Box display='flex' flexGrow={1}>
          <Typography variant='h6' sx={{ marginRight: '20px' }}>
            <StyledLink component={RouterLink} to={'/'}></StyledLink>
          </Typography>
          <Typography variant='h6' sx={{ marginRight: '20px' }}>
            <StyledLink
              to={'/resources'}
              component={RouterLink}
              sx={{ color: 'white' }} //temp
            >
              Resources
            </StyledLink>
          </Typography>
          <Typography variant='h6'>
            <StyledLink
              component={RouterLink}
              to={'/people'}
              sx={{ color: 'white' }}
            >
              People
            </StyledLink>
          </Typography>
        </Box>
        <Box display='flex'>
          {isLoggedIn ? (
            <>
              <StyledLink>
                <Button
                  color='inherit'
                  component={RouterLink}
                  to='/userinfo'
                  sx={{ color: 'white' }}
                >
                  {userName}
                </Button>
              </StyledLink>
              <Button color='inherit' onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <StyledLink>
              <Button color='inherit' component={RouterLink} to='/login'>
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
