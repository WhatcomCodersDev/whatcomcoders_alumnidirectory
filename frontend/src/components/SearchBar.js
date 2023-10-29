import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Box
      display="flex"
      justifyContent="center" // Center horizontally
      alignItems="center" // Center vertically
      height="100%" // Take up full height of its container
    >
      <TextField
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
        variant="outlined"
        fullWidth
        sx={{
          padding: "10px 0",
          maxWidth: 400,
          marginBottom: 2,
        }}
      />
    </Box>
  );
};

export default SearchBar;
