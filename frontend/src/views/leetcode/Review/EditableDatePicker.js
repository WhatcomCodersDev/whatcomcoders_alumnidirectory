// src/components/ReviewProblemsTable/EditableDatePicker.js
import React from 'react';
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';

const EditableDatePicker = ({ value, onChange }) => (
  <DateTimePicker
    value={value}
    onChange={onChange}
    renderInput={(params) => <TextField {...params} />}
  />
);

export default EditableDatePicker;
