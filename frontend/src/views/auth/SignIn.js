import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  Box,
  Divider,
} from '@mui/material';
import Axios from 'axios';
import GoogleIcon from '@mui/icons-material/Google'; // If available, or use <img> for logos
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // If available, or use <img> for logos
import { styled } from '@mui/material/styles';

const apiUrl = process.env.REACT_APP_API_URL;

const GoogleButton = styled(Button)(({ theme }) => ({
  color: '#4285F4',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
  marginBottom: theme.spacing(1),
}));

const LinkedInButton = styled(Button)(({ theme }) => ({
  color: '#0077B5',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
  marginBottom: theme.spacing(1),
}));

const SignIn = (props) => {
  const history = useNavigate();

  const handleGoogleOAuth = (e) => {
    e.preventDefault();
    Axios.get(`${apiUrl}/auth/google`, {})
      .then((res) => {
        window.location.assign(res.data.auth_url);
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleLogin = (e) => {
    handleGoogleOAuth(e);
    props.login(e);
    history.push('/userinfo');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        // background:
        //   'linear-gradient(135deg, #f6b2b5 0%, #f0f0f0 50%, #addbff 100%)',
      }}
    >
      <Card sx={{ maxWidth: 400, m: 1, textAlign: 'center' }}>
        <CardContent sx={{ padding: 4 }}>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Connect with your peers
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
            Get access to our WWU community of Mentors in Design, Product, AI,
            Tech and more.
          </Typography>
          <GoogleButton
            fullWidth
            startIcon={
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'
                alt='Google logo'
                style={{ width: 24, height: 24 }}
              />
            }
            onClick={handleGoogleOAuth}
          >
            Continue with Google
          </GoogleButton>
          <LinkedInButton
            fullWidth
            startIcon={
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'
                alt='LinkedIn logo'
                style={{ width: 24, height: 24 }}
              />
            }
            // onClick={handleLinkedInOAuth}
          >
            Continue with LinkedIn
          </LinkedInButton>
          <Divider sx={{ my: 2 }}>OR</Divider>
          <TextField
            fullWidth
            label='Your email address'
            variant='outlined'
            sx={{ mb: 2 }}
          />
          <Button variant='contained' color='secondary' fullWidth>
            Continue with email
          </Button>
          <Typography
            variant='caption'
            color='text.secondary'
            sx={{ mt: 2, display: 'block' }}
          >
            This site is protected by reCAPTCHA Enterprise and the Google
            Privacy Policy and Terms of Service apply.
            <br />
            By continuing, you agree to the Terms of use, Privacy Policy, and
            Community Standards of Whatcom Coders.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
