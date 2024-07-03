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

const ProfileDescription = ({ person }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "70%",
        height: "70vh",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "35px",
          background:
            "linear-gradient(180deg, rgba(139,167,32,0) 0%, rgba(255,255,255,1) 100%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          overflow: "scroll",
          width: "100%",
          height: "100%",
          position: "relative",
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
    </Box>
  );
};

export default ProfileDescription;
