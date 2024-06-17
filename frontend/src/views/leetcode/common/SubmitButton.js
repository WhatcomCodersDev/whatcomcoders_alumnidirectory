// src/components/SubmitButton.js
import React from 'react';
import { Button } from '@mui/material';

const SubmitButton = ({ handleSubmit }) => {
  return (
    <Button
      id='submit-button'
      variant='contained'
      color='secondary'
      onClick={handleSubmit}
      sx={{ marginTop: '16px' }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
