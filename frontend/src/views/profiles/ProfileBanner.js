import React from 'react';
import { Avatar, Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(22),
  height: theme.spacing(22),
  border: `6px solid ${theme.palette.background.paper}`,
}));

const ProfileBanner = ({ name, role, avatarUrl }) => {
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
            <Typography fontWeight={'medium'}>{role}</Typography>
            <LinkedInIcon />
          </Stack>

          {/* Buttons to meet */}
          <Stack direction='row' spacing={2} sx={{ height: 50 }}>
            <Button variant='outlined' size='medium'>
              Get intro
            </Button>
            <Button variant='outlined' size='medium'>
              Meet me!
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfileBanner;
