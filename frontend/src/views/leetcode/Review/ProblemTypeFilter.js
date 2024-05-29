// src/Filter.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filter = ({ filter, setFilter }) => {
  return (
    <FormControl variant='outlined' fullWidth margin='normal'>
      <InputLabel id='problem-type-label'>Problem Type</InputLabel>
      <Select
        labelId='problem-type-label'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        label='Problem Type'
      >
        <MenuItem value='All'>All</MenuItem>
        <MenuItem value='DFS'>DFS</MenuItem>
        <MenuItem value='DP'>DP</MenuItem>
        <MenuItem value='BFS'>BFS</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter;
