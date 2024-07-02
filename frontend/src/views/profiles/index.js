import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Chip,
  Container,
  Stack,
  Paper,
  Tab,
  Tabs,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import ProfileBanner from "./ProfileBanner";
import ProfileDescription from "./ProfileDescription";

// const about = `I'm the certified coders pimp.\nAs my mentees, you'll be part of the CORE gang (Code-Whore). \nAfter receiving my wisdom, 11/10 of my COREs now work at FAANG companies.`;

const compliment = `Very friendly mentor. Listen to my concern and give good advice. Very realistic, not too overly pessimistic nor optimistic`;

const apiUrl = process.env.REACT_APP_API_URL;

// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);


const BackgroundWavesPhoto = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src="/profile_Vector 6.png"
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 1,
          bottom: 0,
          right: 1,
        }}
      />
      <img
        src="/profile_Vector 4.png"
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 1,
          bottom: 0,
        }}
      />
      <img
        src="/profile_Vector 5.png"
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 1,
          bottom: 0,
        }}
      />
      <Container sx={{ position: "relative", zIndex: 2, marginTop: 5 }}>
        {children}
      </Container>
    </Box>
  );
};

const ProfileViews = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [person, setPerson] = useState(null);
  useEffect(() => {
    const fetchPerson = async (nameSlug) => {
      try {
        const response = await fetch(`${apiUrl}/profile/${nameSlug}`);
        const data = await response.json();
        console.log(data);
        setPerson(data);
      } catch (error) {
        console.log("Failed to fetch person:", error);
      }
    };

    const path = window.location.pathname;
    const username = path.split("/").pop();
    if (username) {
      fetchPerson(username);
    }
  }, []);

  if (!person) {
    return <div>Loading...</div>;
  }

  console.log(person);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <BackgroundWavesPhoto>
        <Paper elevation={3} sx={{ padding: 5 }}>
          <Stack direction={"row"} spacing={4}>
            <ProfileBanner
              sx={{ width: "30%" }}
              name={person.name}
              role={person.jobTitle}
              company={person.company}
              avatarUrl={person.picture}
              data={person}
            />
            <ProfileDescription person={person}/>
          </Stack>
        </Paper>
      </BackgroundWavesPhoto>
    </Box>
  );
};

export default ProfileViews;
