import React, { useState } from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Box
      display='flex'
      justifyContent='center' // Center horizontally
      alignItems='center' // Center vertically
      height='100%' // Take up full height of its container
      width='50%'
      sx={{
        marginBottom: 2, // Lower the search bar by adjusting the margin below it
      }}
    >
      <TextField
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder='Search'
        variant='outlined'
        fullWidth
        sx={{
          padding: '10px 0',
          maxWidth: 800,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
