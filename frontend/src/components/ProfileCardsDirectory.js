import "../styles/theme.css";
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

const ProfileCardsDirectory = () => {
  const [users, setUsers] = useState([]);

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

  return (
    <div>
      {users.map((user) => (
        <ProfileCard key={user.email} data={user} />
      ))}
    </div>
  );
};

export default ProfileCardsDirectory;
