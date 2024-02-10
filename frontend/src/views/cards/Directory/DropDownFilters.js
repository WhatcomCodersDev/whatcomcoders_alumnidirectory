import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const apiUrl = process.env.REACT_APP_API_URL;

const DropDownFilters = ({ setFilteredUsers }) => {
  const [meetMeFor, setMeetMeFor] = useState('');
  const [areasOfExpertise, setAreasOfExpertise] = useState('');
  const [skills, setSkills] = useState('');

  const fetchFilteredUsers = async (filterType, value) => {
    let endpoint = '';
    switch (filterType) {
      case 'meetMeFor':
        endpoint = `/api/directory/getMeetMeFor?filter=${value}`;
        break;
      case 'areasOfExpertise':
        endpoint = `/api/directory/getAreasOfExpertise?filter=${value}`; // Assuming query parameter
        break;
      case 'skills':
        endpoint = `/api/directory/getSkills?filter=${value}`; // Assuming query parameter
        break;
      default:
        return;
    }

    try {
      const response = await fetch(`${apiUrl}${endpoint}`);
      const data = await response.json();
      console.log(data);
      setFilteredUsers(data);
    } catch (error) {
      console.log(`Failed to fetch ${filterType}:`, error);
    }
  };

  const handleDropdownChange = (filterType) => (e) => {
    const value = e.target.value;
    // Update local state immediately
    if (filterType === 'meetMeFor') {
      setMeetMeFor(value);
    } else if (filterType === 'areasOfExpertise') {
      setAreasOfExpertise(value);
    } else if (filterType === 'skills') {
      setSkills(value);
    }
    // Fetch and filter users based on the selected filter
    fetchFilteredUsers(filterType, value);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start', // Align items to the start
          flexWrap: 'wrap', // Allow items to wrap if needed
          gap: 2, // Maintain gap between items
          mb: 4,
        }}
      >
        <FormControl sx={{ minWidth: 120, flexGrow: 1, maxWidth: '30%' }}>
          <InputLabel>Meet Me For</InputLabel>
          <Select
            value={meetMeFor}
            label='Meet Me For'
            onChange={handleDropdownChange('meetMeFor')}
          >
            <MenuItem value='coffeeChats'>Coffee Chats</MenuItem>
            <MenuItem value='resumeReview'>Resume Reviews</MenuItem>
            <MenuItem value='mentorship'>Mentorship</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120, flexGrow: 1, maxWidth: '30%' }}>
          <InputLabel>Area of Expertise</InputLabel>
          <Select
            value={areasOfExpertise}
            label='Areas of Expertise'
            onChange={handleDropdownChange('areasOfExpertise')}
          >
            <MenuItem value='frontend'>Frontend Development</MenuItem>
            <MenuItem value='backend'>Backend Development</MenuItem>
            <MenuItem value='fullstack'>Full Stack Development</MenuItem>
            <MenuItem value='design'>Design</MenuItem>
            <MenuItem value='marketing'>Marketing</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120, flexGrow: 1, maxWidth: '30%' }}>
          <InputLabel>Skills</InputLabel>
          <Select
            value={skills}
            label='skills'
            onChange={handleDropdownChange('skills')}
          >
            <MenuItem value='tech'>Tech</MenuItem>
            <MenuItem value='finance'>Finance</MenuItem>
            <MenuItem value='healthcare'>Healthcare</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default DropDownFilters;
