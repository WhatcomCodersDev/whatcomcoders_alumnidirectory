import React from 'react';
<<<<<<< HEAD
import { Avatar, Box, Typography, Link, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UserMedia from './UserMedia';
=======
import { Avatar, Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
>>>>>>> a94b700865eafa5b8ba0b9d8a08c03bc4ff7362f

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(22),
  height: theme.spacing(22),
  border: `6px solid ${theme.palette.background.paper}`,
}));

<<<<<<< HEAD
const ProfileBanner = ({ name, role, company, avatarUrl, data }) => {
=======
const ProfileBanner = ({ name, role, avatarUrl }) => {
>>>>>>> a94b700865eafa5b8ba0b9d8a08c03bc4ff7362f
  return (
    <Stack
      direction='row'
      spacing={2}
      sx={{
        mt: -5,
        mb: 10,
      }}
    >
      <ProfileAvatar src={avatarUrl} />
      <Stack sx={{ width: '100%' }}>
        <Box sx={{ height: 70 }} />
        <Stack
          direction='row'
          spacing={1}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Name, Roles and Socials*/}
          <Stack>
            <Typography variant='h1' fontWeight={'bold'}>
              {name}
            </Typography>
<<<<<<< HEAD
            <Typography fontWeight={'medium'}>
              {role} at {company}
            </Typography>
            <UserMedia data={data} />
=======
            <Typography fontWeight={'medium'}>{role}</Typography>
            <LinkedInIcon />
>>>>>>> a94b700865eafa5b8ba0b9d8a08c03bc4ff7362f
          </Stack>

          {/* Buttons to meet */}
          <Stack direction='row' spacing={2} sx={{ height: 50 }}>
<<<<<<< HEAD
            <Button variant='outlined' size='medium' startIcon={<MailIcon />}>
              Get intro
            </Button>
            {data.calendlyUrl && (
              <Button
                variant='outlined'
                size='medium'
                startIcon={<CalendarMonthIcon />}
                href={data.calendlyUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Meet me!
              </Button>
            )}
=======
            <Button variant='outlined' size='medium'>
              Get intro
            </Button>
            <Button variant='outlined' size='medium'>
              Meet me!
            </Button>
>>>>>>> a94b700865eafa5b8ba0b9d8a08c03bc4ff7362f
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfileBanner;
