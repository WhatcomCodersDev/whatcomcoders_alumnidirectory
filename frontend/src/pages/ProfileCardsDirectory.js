import "../styles/theme.css";
import "../styles/profileCardsDirectory.css";
import React, { useState, useEffect } from "react";
import ProfileCard from "../components/profileCard/ProfileCard";
import SearchBar from "../components/SearchBar";

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

      <div className="profile-grid-container">
        {filteredUsers.map((user) => (
          <ProfileCard key={user.email} data={user} />
        ))}
      </div>
    </div>
  );
};

export default ProfileCardsDirectory;
