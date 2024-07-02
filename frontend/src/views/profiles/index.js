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

// const about = `I'm the certified coders pimp.\nAs my mentees, you'll be part of the CORE gang (Code-Whore). \nAfter receiving my wisdom, 11/10 of my COREs now work at FAANG companies.`;
const skills = [
  "Deep Learning",
  "ML",
  "Python",
  "Go",
  "Computer Systems",
  "AI",
  "Embedded Programming",
];
const services = [
  "Mock Interview",
  "Code Reviews",
  "Career Growth",
  "Break into Tech",
  "Salary Negotiation",
  "Promotion",
  "Team Lead",
];

const compliment = `Very friendly mentor. Listen to my concern and give good advice. Very realistic, not too overly pessimistic nor optimistic`;

const apiUrl = process.env.REACT_APP_API_URL;

// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SkillsSection = ({ sectionTitle, list }) => {
  return (
    <>
      <Box>
        <Typography variant="h5">{sectionTitle}</Typography>
      </Box>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
        sx={{ width: "100%" }}
      >
        {list.map((item, index) => (
          <Chip key={index} label={item} />
        ))}
      </Stack>
    </>
  );
};

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
            <Box
              sx={{
                overflow: "scroll",
                width: "70%",
                height: "70vh",
                boxShadow:
                  "inset 0px -20px 10px -10px rgba(235, 241, 250, 0.95)",
              }}
            >
              {/* Intro */}
              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h5" fontWeight="medium" marginBottom={2}>
                  About Me
                </Typography>
                <Typography>{person.description}</Typography>
              </Box>

              {/* Ice breakers - hardcoded*/}
              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h6" fontWeight="regular">
                  Favorite WWU Professor
                </Typography>
                <Typography>Yudong</Typography>
                <Typography variant="h6" fontWeight="regular">
                  Hardest CS Class
                </Typography>
                <Typography>CSCI 247: OS</Typography>
              </Box>

              {/* Meet me for - hardcoded */}
              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h5" fontWeight="medium" marginBottom={1}>
                  Meet Me For
                </Typography>
                <SkillsSection list={services} />
              </Box>
            </Box>
          </Stack>
        </Paper>
      </BackgroundWavesPhoto>
    </Box>
  );
};

export default ProfileViews;
