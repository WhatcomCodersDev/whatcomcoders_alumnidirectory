import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Button, Typography } from '@mui/material';
import Axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f0f0f0',
      }}
    >
      <Card style={{ width: '400px', textAlign: 'center' }}>
        <CardContent style={{ padding: '40px' }}>
          <Typography variant='h4' style={{ marginBottom: '20px' }}>
            Sign In
          </Typography>
          <Button
            variant='outlined'
            fullWidth
            style={{
              marginBottom: '10px',
              border: '1px solid #4285F4',
              color: '#4285F4',
              fontSize: '16px',
            }}
            onClick={handleGoogleLogin}
            startIcon={
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'
                alt='Google Logo'
                style={{ width: '32px', height: '32px' }}
              />
            }
          >
            Sign in with Google
          </Button>
          {/* Placeholder buttons for future sign-in methods */}
          <Button
            variant='outlined'
            fullWidth
            style={{ marginBottom: '10px', fontSize: '16px' }}
            disabled
          >
            Sign in with Microsoft
          </Button>
          <Button
            variant='outlined'
            fullWidth
            style={{ fontSize: '16px' }}
            disabled
          >
            Sign in with Email
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
