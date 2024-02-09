import { Box, Typography, Stack } from '@mui/material';
import { ProfileAvatar } from './ProfileBanner';
import { useTheme } from '@mui/material/styles';

const Compliment = ({ key, name, role, avatarUrl, date, compliment }) => {
  const theme = useTheme();

  return (
    <Box>
      <Stack
        direction="row"
        sx={{ alignItems: 'center' }}
        key={key}
        spacing={2}
        mb={1}
      >
        <ProfileAvatar avatarUrl={avatarUrl} spacing={6} hasBorder={false} />
        <Stack
          direction="row"
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Box>
            <Typography fontWeight="bold" variant="h6">
              {name}
            </Typography>
            <Typography variant="subtitle2">{role}</Typography>
          </Box>
          <Typography variant="overline">{date}</Typography>
        </Stack>
      </Stack>
      <Typography variant="body1">{compliment}</Typography>
    </Box>
  );
};

export default Compliment;
