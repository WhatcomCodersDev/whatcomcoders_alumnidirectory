import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid } from '@mui/material';

const FootBar = memo(() => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        paddingTop: 0,
        paddingBottom: 2,
        color: '#ffffff',
      }}
    >
      <Container maxWidth='lg'>
        <Box mt={5} ml={5} mr={5}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <Typography component='div'>
                <Box sx={{ fontWeight: 'bold', m: 1 }}>Trust</Box>
                <Box sx={{ fontWeight: 'light', m: 1 }}>
                  <Link
                    to='/legal/terms-and-conditions'
                    style={{
                      fontWeight: 400,
                      color: '#e6e6e6',
                      textDecoration: 'none',
                    }}
                  >
                    Terms and Conditions
                  </Link>
                </Box>
                <Box sx={{ fontWeight: 'light', m: 1 }}>
                  <Link
                    to='/legal/privacy-policy'
                    style={{
                      fontWeight: 400,
                      color: '#e6e6e6',
                      textDecoration: 'none',
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={6} md={4}></Grid>
            <Grid item xs={6} md={4}>
              <Typography component='div'>
                <Box sx={{ fontWeight: 'bold', m: 1 }}>Connect</Box>
                <Box sx={{ fontWeight: 'light', m: 1 }}>
                  <Link
                    to='/support'
                    style={{
                      fontWeight: 400,
                      color: '#e6e6e6',
                      textDecoration: 'none',
                    }}
                  >
                    Help Center
                  </Link>
                </Box>
                <Box sx={{ fontWeight: 'light', m: 1 }}>
                  <a
                    href={process.env.REACT_APP_LINKEDIN_URL}
                    style={{
                      fontWeight: 400,
                      color: '#e6e6e6',
                      textDecoration: 'none',
                    }}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Linkedin
                  </a>
                </Box>
                <Box sx={{ fontWeight: 'light', m: 1 }}>
                  <a
                    href={process.env.REACT_APP_TWITTER_URL}
                    style={{
                      fontWeight: 400,
                      color: '#e6e6e6',
                      textDecoration: 'none',
                    }}
                    target='_blank'
                    rel='noreferrer'
                  >
                    X (formally Twitter)
                  </a>
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Typography variant='caption' display='block' sx={{ margin: 1 }}>
            2023 © whatcomcoders
          </Typography>
        </Box>
      </Container>
    </Box>
  );
});

export default FootBar;
