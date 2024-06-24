// src/components/CustomCheckbox.js
import React from 'react';
import { Checkbox, TableCell } from '@mui/material';

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <TableCell padding='checkbox'>
      <Checkbox
        checked={checked}
        onChange={onChange}
        sx={{ color: checked ? 'green' : 'default' }}
      />
    </TableCell>
  );
};

export default CustomCheckbox;
