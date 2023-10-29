import React from "react";
import { Button, Container, Typography, Box, Grid, Link } from "@mui/material";
import styled from "@emotion/styled";

const HeroImage = styled(Box)`
  height: 500px;
  background-image: url("path-to-your-hero-image.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
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
      >
        <Typography variant="h4">WWU CS Connect</Typography>
        <Button variant="contained" color="primary">
          Login/Join
        </Button>
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
          <Button variant="contained" color="secondary" size="large">
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
        <Button variant="outlined" color="primary">
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
          color="secondary"
          marginTop={2}
        >
          Join Discord
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
