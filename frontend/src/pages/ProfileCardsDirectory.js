import "../styles/theme.css";
import React, { useState, useEffect } from "react";
import ProfileCard from "../components/profileCard/ProfileCard";
import SearchBar from "../components/SearchBar";
import Box from "@mui/material/Box";

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

const ProfileCardsDirectory = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterUsers(term);
  };

  const filterUsers = (term) => {
    if (term) {
      const filteredUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(term.toLowerCase());
      });
      setFilteredUsers(filteredUsers);
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
        console.log("Failed to fetch users:", error);
      }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: 2,
          padding: "20px 0",
        }}
      >
        {filteredUsers.map((user) => (
          <Box
            key={user.email}
            sx={{
              flex: "0 0 275px",
              height: "650px",
              width: "650px",
              overflow: "hidden",
              // marginBottom: 1,
            }}
          >
            <ProfileCard data={user} />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default ProfileCardsDirectory;
