// src/components/EditButton.js
import React from 'react';
import { Box, Button } from '@mui/material';

const EditButton = ({ editMode, setEditMode }) => {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      mb={2}
    >
      <Button
        variant='contained'
        color='primary'
        onClick={() => setEditMode((prev) => !prev)}
        sx={{ borderRadius: '50px' }}
      >
        {editMode ? 'Cancel' : 'Edit'}
      </Button>
    </Box>
  );
};

export default EditButton;
