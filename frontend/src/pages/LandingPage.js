import React from "react";
import { Button, Container, Typography, Box, Grid, Link } from "@mui/material";
import styled from "@emotion/styled";

const HeroImage = styled(Box)`
  border: 1px solid red; // For debugging
  //   background-color: blue; // For debugging
  height: 500px;
  background-image: url("./stock_photo.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const LandingPage = () => {
  return (
    <Container>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={4}
        marginTop={2}
      >
        <Typography variant="h3" flexGrow={1} textAlign="center">
          Whatcom Coders Alumni Network
        </Typography>
      </Box>

      {/* Hero Section */}
      <HeroImage>
        <Box textAlign="center">
          <Typography variant="h2" gutterBottom>
            Connect with WWU CS Alumni
          </Typography>
          <Typography variant="h5" marginBottom={3}>
            Discover, Engage & Grow Together
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Join our Waitlist
          </Button>
        </Box>
      </HeroImage>

      {/* Features Section */}
      <Box py={5}>
        <Typography variant="h4" textAlign="center" marginBottom={5}>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Profile Cards</Typography>
            <Typography>
              Learn about fellow alumni, set up meetings, and discover shared
              interests.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Direct Connect</Typography>
            <Typography>
              Set up meetings through Calendly, and connect in real-time.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Resources</Typography>
            <Typography>
              Access curated CS resources tailored for our alumni community.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Secondary CTA */}
      <Box py={5} textAlign="center">
        <Typography variant="h5" gutterBottom>
          Explore Our Resources
        </Typography>
        <Button variant="contained" color="primary">
          Check Out Resources
        </Button>
      </Box>

      {/* Footer */}
      <Box py={5} textAlign="center">
        <Typography>
          Join our Discord community for real-time discussions and networking.
        </Typography>
        <Button
          component={Link}
          href="https://discord.gg/your-discord-link"
          variant="contained"
          color="primary"
          marginTop={2}
        >
          Join Discord
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
