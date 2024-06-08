// src/Filter.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filter = ({ filter, setFilter }) => {
  return (
    <FormControl
      variant='outlined'
      fullWidth
      margin='normal'
      sx={{
        maxWidth: 180,
        borderRadius: '50px',
        // overflow: 'hidden',
      }}
    >
      <InputLabel id='problem-type-label'>Problem Type</InputLabel>
      <Select
        labelId='problem-type-label'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        label='Problem Type'
        sx={{
          borderRadius: '50px',
        }}
      >
        <MenuItem value='All'>All</MenuItem>
        <MenuItem value='Arrays & Hashing'>Arrays & Hashing</MenuItem>
        <MenuItem value='Linked List'>Linked List</MenuItem>
        <MenuItem value='Tree'>Tree</MenuItem>
        <MenuItem value='Graph'>Graph</MenuItem>
        <MenuItem value='1D DP'>1D DP</MenuItem>
        <MenuItem value='Binary Search'>Binary Search</MenuItem>
        <MenuItem value='Stack'>Stack</MenuItem>
        <MenuItem value='2D DP'>2D DP</MenuItem>
        <MenuItem value='Bit Manipulation'>Bit Manipulation</MenuItem>
        <MenuItem value='Two Pointers'>Two Pointers</MenuItem>
        <MenuItem value='Sliding Window'>Sliding Window</MenuItem>
        <MenuItem value='Math'>Math</MenuItem>
        <MenuItem value='Matrix'>Matrix</MenuItem>
        <MenuItem value='Intervals'>Intervals</MenuItem>
        <MenuItem value='Heap'>Heap</MenuItem>
        <MenuItem value='Advanced Graph'>Advanced Graph</MenuItem>
        <MenuItem value='Backtracking'>Backtracking</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter;
