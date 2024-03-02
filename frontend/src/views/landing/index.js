import React from 'react';
import { Button, Container, Typography, Box, Grid, Paper } from '@mui/material';
import styled from '@emotion/styled';

// Assuming these imports are correct and used elsewhere
import profileCardIcon from '../../static/profilecards_layout.jpeg';
import networkingIcon from '../../static/networkingicon_layout.png';
import resourcesIcon from '../../static/educationicon_layout.png';
import wwuBackground from '../../static/wwu.webp';
import DiscordIcon from '../../static/discord.png'; // Assuming you have this logo

const HeroImage = styled(Box)(({ theme }) => ({
  height: '500px',
  backgroundImage: 'url(./stock_photo.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  color: '#333333',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const FeatureIcon = styled(Box)`
  height: 100px;
  width: 100px;
  margin: 20px auto;
  background-size: contain;
  background-repeat: no-repeat;
`;

const LandingView = () => {
  return (
    <Container>
      <HeroImage>
        <Grid
          container
          spacing={2}
          alignItems='center'
          justifyContent='center'
          style={{ height: '100%' }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant='h2' gutterBottom color='primary.main'>
              Connect With WWU Tech Alumni
            </Typography>
            <Typography variant='h5' marginBottom={3}>
              Discover, Engage & Grow Together
            </Typography>
            <Box display='flex' flexDirection='row' alignItems='center' gap={2}>
              <Button
                href={'/people'}
                variant='contained'
                size='large'
                color='primary'
                sx={{ borderRadius: 28 }} // Making the button round
              >
                Meet People
              </Button>
              <Button
                component='a'
                href='https://discord.gg/r6ShrR73Jx'
                target='_blank'
                rel='noopener noreferrer'
                variant='contained'
                size='large'
                sx={{
                  backgroundColor: '#5865F2',
                  borderRadius: 28, // Making the button round
                  '&:hover': {
                    backgroundColor: '#4752c4', // Slightly darker shade on hover
                  },
                }}
                startIcon={
                  <img
                    src={DiscordIcon}
                    alt='Discord'
                    style={{ width: 24, height: 24 }}
                  />
                }
              >
                Join Our Discord
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Paper elevation={4} sx={{ borderRadius: 2 }}>
              <img
                src={wwuBackground}
                alt='WWU'
                style={{ maxWidth: '100%', borderRadius: '4px' }}
              />
            </Paper>
          </Grid>
        </Grid>
      </HeroImage>

      {/* Features Section */}
      <Box py={5} textAlign='center'>
        <Typography variant='h4' marginBottom={5}>
          Features
        </Typography>
        <Grid container spacing={4} justifyContent='center'>
          <Grid item xs={12} sm={4} textAlign='center'>
            <FeatureIcon
              style={{ backgroundImage: `url(${profileCardIcon})` }}
            />
            <Typography variant='h6'>Profile Cards</Typography>
            <Typography>
              Learn about fellow alumni, set up meetings, and discover shared
              interests.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign='center'>
            <FeatureIcon
              style={{ backgroundImage: `url(${networkingIcon})` }}
            />
            <Typography variant='h6'>Direct Connect</Typography>
            <Typography>
              Set up meetings through Calendly, and connect in real-time.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign='center'>
            <FeatureIcon style={{ backgroundImage: `url(${resourcesIcon})` }} />
            <Typography variant='h6'>Resources</Typography>
            <Typography>
              Access curated CS resources tailored for our alumni community.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box py={5} textAlign='center'>
        {/* <Button href='/resources' variant='outlined' color='primary'>
          Explore Resources
        </Button> */}
      </Box>
    </Container>
  );
};

export default LandingView;
