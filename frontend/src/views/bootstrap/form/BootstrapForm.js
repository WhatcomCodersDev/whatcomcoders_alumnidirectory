import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

const BootstrapForm = () => {
  const BOOTSTRAP_API_URL = process.env.REACT_APP_BOOTSTRAP_API_URL;
  const [githubUsername, setGithubUsername] = useState('');
  const [language, setLanguage] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      githubUsername: githubUsername,
      language: language,
      service: service,
    };

    fetch(`${BOOTSTRAP_API_URL}/bootstrap/submit-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data.data);
        console.log('other:', data);
        if (data.data.status === 'error') {
          console.error('Error:', data.data.message);
          alert('Failed: ' + data.data.message);
        } else {
          console.log('Success:', data.data);
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <form className='p-4 max-w-lg mx-auto space-y-4' onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label='Github Username'
        variant='outlined'
        className='bg-white'
        value={githubUsername}
        onChange={(e) => setGithubUsername(e.target.value)}
      />
      <FormControl fullWidth variant='outlined' className='bg-white'>
        <InputLabel id='language-label'>Technology Stack</InputLabel>
        <Select
          labelId='language-label'
          id='language-select'
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          label='Technology Stack'
        >
          <MenuItem value='Python (Flask)'>Python (Flask)</MenuItem>
          <MenuItem value='Java (Springboard)'>Java (Springboard)</MenuItem>
          <MenuItem value='Go (Mux)'>Go (Mux)</MenuItem>
          <MenuItem value='JavaScript (Express)'>JavaScript (Express)</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth variant='outlined' className='bg-white'>
        <InputLabel id='service-label'>Select Service</InputLabel>
        <Select
          labelId='service-label'
          id='service-select'
          value={service}
          onChange={(e) => setService(e.target.value)}
          label='Select Service'
        >
          <MenuItem value='App Engine'>App Engine</MenuItem>
          <MenuItem value='Cloud Functions'>Cloud Functions</MenuItem>
          <MenuItem value='Cloud Run'>Cloud Run</MenuItem>
        </Select>
      </FormControl>
      <Button variant='contained' color='primary' type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default BootstrapForm;
