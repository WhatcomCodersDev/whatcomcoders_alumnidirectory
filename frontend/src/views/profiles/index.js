import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Avatar,
  Typography,
  Chip,
  Container,
  Button,
  Card,
  CardContent,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import BackgroundBanner from '../../components/BackgroundBanner';

const apiUrl = process.env.REACT_APP_API_URL;

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const ProfileContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  top: '-50px', // Adjust this value as needed
  textAlign: 'center',
  backgroundColor: '#f5f5f5', // Replace with your desired color
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  border: `3px solid ${theme.palette.background.paper}`,
}));

const ProfileViews = () => {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    const fetchPerson = async (username) => {
      try {
        username = username.replace(/-/, ' ');
        console.log(username);

        const response = await fetch(`${apiUrl}/profile/${username}`);
        const data = await response.json();
        console.log(data);
        setPerson(data);
      } catch (error) {
        console.log('Failed to fetch person:', error);
      }
    };

    const path = window.location.pathname;
    const username = path.split('/').pop();
    if (username) {
      fetchPerson(username);
    }
  }, []);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Offset />
      <Box sx={{ bgcolor: '#e0e0e0', height: 'calc(100vh - 64px)' }}>
        <ProfileContainer />
        {/* Adjust height */}
        <ProfileAvatar src={person.picture} alt={person.name} />

        <Typography variant='h5' component='h1' gutterBottom>
          {person.name}
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          {person.title}
        </Typography>

        <Button variant='contained' color='primary'>
          Contact
        </Button>
      </Box>
    </div>
  );
};

export default ProfileViews;
