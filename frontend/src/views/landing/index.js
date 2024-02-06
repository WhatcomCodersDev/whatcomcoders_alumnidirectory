import React from 'react';
import { Button, Container, Typography, Box, Grid } from '@mui/material';
import styled from '@emotion/styled';
import profileCardIcon from '../../static/profilecards_layout.jpeg';
import networkingIcon from '../../static/networkingicon_layout.png';
import resourcesIcon from '../../static/educationicon_layout.png';
import logo from '../../static/logo.png';

const HeroImage = styled(Box)`
  height: 500px;

  // border: 3px solid black; // For debugging
  //   background-color: blue; // For debugging
  height: 500px;
  background-image: url('./stock_photo.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
`;

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
      {/* Header */}
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        marginBottom={4}
      >
        {/* <Typography variant='h2' flexGrow={1} textAlign='center'>
          Whatcom Coders Alumni Network
        </Typography> */}
      </Box>

      {/* Hero Section */}
      <HeroImage>
        <Box textAlign='center'>
          <Typography variant='h2' gutterBottom color='primary.main'>
            Connect With WWU Tech Alumni
          </Typography>
          <Typography variant='h5' marginBottom={3}>
            Discover, Engage & Grow Together
          </Typography>
          <Button
            href='https://forms.gle/tuCZ3amPND88St3w6'
            variant='contained'
            size='large'
            color='secondary'
          >
            Join our Waitlist
          </Button>
        </Box>
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

      {/* Footer */}
      <Box py={5} textAlign='center'>
        <Button
          component='a'
          href='https://discord.gg/r6ShrR73Jx'
          target='_blank'
          rel='noopener noreferrer'
          variant='contained'
          color='secondary'
          marginTop={2}
        >
          Join Discord
        </Button>
      </Box>
    </Container>
  );
};

export default LandingView;
