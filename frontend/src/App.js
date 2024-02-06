import './styles/theme.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './views/auth/SignIn'; //
import React from 'react';
import Axios from 'axios';
import NavBar from './components/NavBar';
import UserInfo from './views/users/UserInfo';
import PrivateRoute from './components/PrivateRoute';
import ProfileCardsDirectory from './views/cards';
import LandingPage from './views/landing';
import ResourcesPage from './views/resources';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { THEMES } from './constants';
import { createWebTheme } from './theme';

function App() {
  const theme = createWebTheme({
    direction: 'ltr',
    responsiveFontSizes: true,
    theme: THEMES.LIGHT,
  });

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
