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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import ProfileBanner from "./ProfileBanner";
import Compliment from "./Compliment";

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

const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
}));

const StickyPaper = styled(Paper)(({ theme }) => ({
  position: "sticky",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  width: 400,
  height: 350,
  top: 10,
}));

const BackgroundBanner = ({ imageUrl }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        width: "100%",
        height: 200,
      }}
    ></Box>
  );
};

const TabPanel = ({ children, value, index, ...rest }) => {
  return (
    <Box hidden={value !== index} id={`simple-tab-panel-${index}`} {...rest}>
      {children}
    </Box>
  );
};

const TabPanelPaper = ({ children, value, index, ...rest }) => {
  return (
    <ProfilePaper elevation={2} padding={10} {...rest}>
      <Typography
        variant="body1"
        sx={{
          whiteSpace: "pre-wrap",
        }}
      >
        {children}
      </Typography>
    </ProfilePaper>
  );
};

const SkillsSection = ({ sectionTitle, list }) => {
  return (
    <>
      <Box sx={{ mt: 2, borderBottom: 1, borderColor: "divider" }}>
        <Typography variant="h5">{sectionTitle}</Typography>
      </Box>
      <Stack
        direction="row"
        spacing={1}
        mt={3}
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
    <>
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
        }}
      >
        <BackgroundBanner
          imageUrl={`https://i.pinimg.com/originals/1a/5e/69/1a5e69e95c90693cdda00d158805ad49.jpg`}
        />
        <Container sx={{}}>
          <ProfileBanner
            name={person.name}
            role={person.jobTitle}
            company={person.company}
            avatarUrl={person.picture}
            data={person}
          />
          <Stack
            paddingLeft={3}
            direction="row"
            sx={{ width: "100%", justifyContent: "space-between" }}
          >
            {/* Tabs */}
            <Box sx={{ width: "60%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange} textColor="inherit">
                  <Tab label="About Me" />
                  <Tab label="Compliments" />
                </Tabs>
              </Box>
              <Box mt={3}>
                <TabPanel index={0} value={value}>
                  <TabPanelPaper
                    sx={{
                      boxSizing: "border-box", // Include padding and borders in the element's dimensions
                      // border: '1px solid black', // For debugging
                      overflowY: "auto",
                      maxHeight: "300px",
                      marginBottom: 2, // Make sure the bottom margin is 0
                    }}
                  >
                    {person.description}
                  </TabPanelPaper>
                </TabPanel>
                <TabPanel index={1} value={value}>
                  <TabPanelPaper sx={{ mb: 2 }}>
                    <Compliment
                      name={"Min"}
                      role={"Dilly dallier"}
                      date="02/04/2021"
                      compliment={compliment}
                    />
                  </TabPanelPaper>
                  <TabPanelPaper sx={{ mb: 2 }}>
                    <Compliment
                      name={"Min"}
                      role={"Dilly dallier"}
                      date="02/04/2021"
                      compliment={compliment}
                    />
                  </TabPanelPaper>
                </TabPanel>
              </Box>
            </Box>
            <StickyPaper>
              <SkillsSection sectionTitle="Skills" list={skills} />
              <SkillsSection sectionTitle="Meet me for" list={services} />
            </StickyPaper>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default ProfileViews;
