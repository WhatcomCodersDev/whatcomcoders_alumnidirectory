import {
  Box,
  Avatar,
  Paper,
  Stack,
  Typography,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ProfileAvatar = styled(Avatar)(({ theme, spacing }) => ({
  width: theme.spacing(spacing),
  height: theme.spacing(spacing),
  border: `6px solid ${theme.palette.background.paper}`,
}));

const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
}));

const BackgroundBanner = ({ imageUrl }) => {
  return (
    <Box
      sx={{
        backgroundImage: imageUrl
          ? `url(${imageUrl})`
          : `url(https://i.pinimg.com/originals/1a/5e/69/1a5e69e95c90693cdda00d158805ad49.jpg)`,
        backgroundSize: 'cover',
        width: '100%',
        height: 200,
      }}
    ></Box>
  );
};

const ProfileBanner = ({ name, role, avatarUrl }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        mt: -5,
        mb: 10,
      }}
    >
      <ProfileAvatar src={avatarUrl} spacing={22}/>
      <Stack sx={{ width: '100%' }}>
        <Box sx={{ height: 70 }} />
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Name, Roles and Socials*/}
          <Stack>
            <Typography variant="h1" fontWeight={'bold'}>
              {name}
            </Typography>
            <Typography fontWeight={'medium'}>{role}</Typography>
            <LinkedInIcon />
          </Stack>

          {/* Buttons to meet */}
          <Stack direction="row" spacing={2} sx={{ height: 50 }}>
            <Button variant="outlined" size="medium" startIcon={<MailIcon />}>
              Get intro
            </Button>
            <Button
              variant="outlined"
              size="medium"
              startIcon={<CalendarMonthIcon />}
            >
              Meet me!
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { ProfileAvatar, ProfilePaper, BackgroundBanner, ProfileBanner };
