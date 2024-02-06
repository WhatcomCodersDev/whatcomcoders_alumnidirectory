import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import SearchBar from '../../components/SearchBar';
import {
  Box,
  Container,
  Typography,
  Grid,
  ClickAwayListener,
} from '@mui/material';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

const ProfileCardsDirectoryView = () => {
  const [users, setUsers] = useState([]);
  const [, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterUsers(term);
  };

  const filterUsers = (term) => {
    if (term) {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${apiUrl}/api/people`);
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log('Failed to fetch users:', error);
      }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const toggleFullscreen = (user) => {
    setIsFullscreen(!isFullscreen);
    setSelectedUser(isFullscreen ? null : user);
  };

  const handleClickAway = (e) => {
    console.log(e.target);
    if (isFullscreen) {
      toggleFullscreen(selectedUser);
    }
  };

  const handleBackgroundClick = () => {
    if (isFullscreen) {
      toggleFullscreen(selectedUser);
    }
  };

  return (
    <Container maxWidth='lg'>
      <Typography
        variant='h4'
        component='h1'
        gutterBottom
        align='center'
        sx={{ my: 4 }}
      >
        Meet WWU Alumni
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <SearchBar onSearch={handleSearch} />
      </Box>

      {isFullscreen && selectedUser && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1080,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s',
          }}
          onClick={handleBackgroundClick} // Click handler for the background
        >
          <ProfileCard
            data={selectedUser}
            onToggleFullscreen={() => toggleFullscreen(selectedUser)}
            isFullscreen={true}
          />
        </Box>
      )}

      <Grid container spacing={4} justifyContent='flex-start'>
        {filteredUsers.map((user) => (
          <Grid item key={user.email} xs={12} sm={6} md={4} lg={3}>
            <ProfileCard
              data={user}
              onToggleFullscreen={() => toggleFullscreen(user)}
              isFullscreen={isFullscreen && selectedUser === user}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProfileCardsDirectoryView;
