// src/components/ReviewProblemsTable/EditRatingSelect.js
import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

const EditUserRatingSelection = ({ user_rating, onChange }) => (
  <FormControl variant='outlined' fullWidth>
    <Select value={user_rating} onChange={onChange} autoWidth>
      <MenuItem value='1'>1 (Easy)</MenuItem>
      <MenuItem value='2'>2</MenuItem>
      <MenuItem value='3'>3</MenuItem>
      <MenuItem value='4'>4</MenuItem>
      <MenuItem value='5'>5 (Super Hard)</MenuItem>
    </Select>
  </FormControl>
);

export default EditUserRatingSelection;
