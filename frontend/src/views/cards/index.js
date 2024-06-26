import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // Importing the search icon
import FilterListIcon from "@mui/icons-material/FilterList"; // Importing the filter icon
import RoleSelector from "./Directory/RoleSelector";
import DropDownFilters from "./Directory/DropDownFilters";
import zIndex from "@mui/material/styles/zIndex";

const apiUrl = process.env.REACT_APP_API_URL;
console.log("url", apiUrl);

const ProfileCardsDirectoryView = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = (event) => {
    const term = event.target.value;
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
        console.log(response);
        const data = await response.json();
        const completedProfileUsers = data.filter(
          (people) => people.completed_profile === true
        );

        console.log(completedProfileUsers);
        setUsers(completedProfileUsers);
        setFilteredUsers(completedProfileUsers);
      } catch (error) {
        console.log("Failed to fetch users:", error);
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

  console.log("filtered users:", filteredUsers);

  // const handleClickAway = (e) => {
  //   console.log(e.target);
  //   if (isFullscreen) {
  //     toggleFullscreen(selectedUser);
  //   }
  // };

  // const handleBackgroundClick = () => {
  //   if (isFullscreen) {
  //     toggleFullscreen(selectedUser);
  //   }
  // };

  // return (
  //   <Container maxWidth="lg" sx={{ position: "relative" }}>
  //     <img
  //       src="/people_Vector 4.png"
  //       style={{
  //         position: "absolute",
  //         top: 90,
  //         left: 0,
  //         bottom: 0,
  //         margin: "auto",
  //       }}
  //     />
  //     <Typography
  //       variant="h4"
  //       component="h1"
  //       gutterBottom
  //       align="center"
  //       sx={{ mt: 4, mb: 2 }}
  //     >
  //       Meet WWU Alumni
  //     </Typography>

  //     {/* Navigation Links
  //     <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
  //       <Button color='inherit'>Students</Button>
  //       <Button color='inherit'>Alumni</Button>
  //       <Button color='inherit'>Mentors</Button>
  //     </Box> */}
  //     <RoleSelector setFilteredUsers={setFilteredUsers} />

  //     <Box
  //       sx={{
  //         mb: 4,
  //         display: "flex",
  //         justifyContent: "space-between",
  //         alignItems: "center",
  //       }}
  //     >
  //       {/* Search Bar */}
  //       <TextField
  //         variant="outlined"
  //         placeholder="Search by name, company, role"
  //         size="medium"
  //         value={searchTerm}
  //         onChange={handleSearch}
  //         sx={{
  //           width: "100%",
  //           maxWidth: "500px",
  //           "& .MuiOutlinedInput-root": {
  //             borderRadius: "20px",
  //           },
  //         }}
  //         InputProps={{
  //           startAdornment: (
  //             <InputAdornment position="start">
  //               <SearchIcon />
  //             </InputAdornment>
  //           ),
  //         }}
  //       />
  //       {/* Filters Icon */}
  //       <Box sx={{ display: "flex", alignItems: "center" }}>
  //         <FilterListIcon sx={{ mr: 1, cursor: "pointer" }} />
  //         <Typography sx={{ cursor: "pointer" }}>Filters</Typography>
  //       </Box>
  //     </Box>

  //     {/* Dropdown Filters */}
  //     <DropDownFilters setFilteredUsers={setFilteredUsers} />

  //     {/* Profile Cards Grid */}
  //     <Grid container spacing={4} justifyContent="flex-start">
  //       {filteredUsers.map((user) => (
  //         <Grid item key={user.email} xs={12} sm={6} md={4} lg={3}>
  //           <ProfileCard
  //             data={user}
  //             onToggleFullscreen={() => toggleFullscreen(user)}
  //             isFullscreen={isFullscreen && selectedUser === user}
  //           />
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Container>
  // );

  return (
    <Stack
      sx={{
        width: "100%",
        height: "auto",
        backgroundPosition: "center",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
      direction="column"
    >
      <img
        src="/people_Vector 6.png"
        style={{
          position: "absolute",
          top: -200,
          width: "100%",
          zIndex: 1,
        }}
      />
      <img
        src="/people_Vector 4.png"
        style={{
          position: "absolute",
          top: -200,
          width: "100%",
          zIndex: 1,
        }}
      />
      <img
        src="/people_Vector 5.png"
        style={{
          position: "absolute",
          top: -200,
          width: "100%",
          zIndex: 1,
        }}
      />
      <Box
        sx={{ position: "relative", zIndex: 2, justifyContent: "flex-start" }}
      >
        <Stack
          sx={{
            marginTop: 10,
            marginBottom: 2,
          }}
          direction="row"
          spacing={2}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: "white",
            }}
          >
            {`connect with us >`}
          </Typography>

          {/* Role selector */}
          <RoleSelector
            sx={{ color: "white" }}
            buttonSize="1.20rem"
            setFilteredUsers={setFilteredUsers}
          />
        </Stack>
        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search by name, company, role"
          size="medium"
          value={searchTerm}
          onChange={handleSearch}
          sx={{
            width: "100%",
            maxWidth: "800px",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
            backgroundColor: "white",
            borderRadius: 2,
            zIndex: 2,
            position: "relative",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography
                  sx={{ fontWeight: "bold", color: "black", fontSize: 30 }}
                >
                  {">"}
                </Typography>
              </InputAdornment>
            ),
          }}
        />
        {/* Dropdown Filters */}
        <DropDownFilters
          sx={{
            position: "relative",
            zIndex: 3,
          }}
          setFilteredUsers={setFilteredUsers}
        />
      </Box>
      <Box
        sx={{
          height: "80vh",
          backgroundColor: "red",
          zIndex: 2,
          position: "relative",
        }}
      >
        <Typography>snap scroll</Typography>
      </Box>
      {/* Profile Cards Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          zIndex: 2,
          position: "relative",
          width: "100%",
        }}
      >
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
    </Stack>
  );
};

export default ProfileCardsDirectoryView;
