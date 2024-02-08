import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Avatar,
  Typography,
  Chip,
  Container,
  Button,
  Card,
  CardContent,
  Stack,
  Paper,
  Tab,
  Tabs,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { BackgroundBanner, ProfileAvatar, ProfilePaper, ProfileBanner } from 'components/ProfileComponents';

const about = `I'm the certified coders pimp.\nAs my mentees, you'll be part of the CORE gang (Code-Whore). \nAfter receiving my wisdom, 11/10 of my COREs now work at FAANG companies.`;
const skills = [
  'Deep Learning',
  'ML',
  'Python',
  'Go',
  'Computer Systems',
  'AI',
  'Embedded Programming',
];
const services = [
  'Mock Interview',
  'Code Reviews',
  'Career Growth',
  'Break into Tech',
  'Salary Negotiation',
  'Promotion',
  'Team Lead',
];

const apiUrl = process.env.REACT_APP_API_URL;

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const StickyPaper = styled(Paper)(({ theme }) => ({
  position: 'sticky',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  width: 400,
  height: 350,
  top: 10,
}));


const TabPanel = ({ children, value, index, ...rest }) => {
  return (
    <ProfilePaper
      elevation={2}
      padding={10}
      hidden={value !== index}
      id={`simple-tab-panel-${index}`}
      {...rest}
    >
      <Typography
        sx={{
          whiteSpace: 'pre-wrap',
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
      <Box sx={{ mt: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h5">{sectionTitle}</Typography>
      </Box>
      <Stack
        direction="row"
        spacing={1}
        mt={3}
        useFlexGap
        flexWrap="wrap"
        sx={{ width: '100%' }}
      >
        {list.map((item, index) => (
          <Chip key={index} label={item} />
        ))}
      </Stack>
    </>
  );
};

const Compliment = ({name, avatarUrl, date}) => {
  return (
    <Stack direction="row" sx={{justifyContent:"center", alignItems:"center"}}>
      <ProfileAvatar spacing={5}/>
      <Typography>Hello</Typography>
    </Stack>
  )
}

export default function ProfileViews() {
  const theme = useTheme();
  const [value, setValue] = useState(0); //for tabs
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchuser = async (username) => {
      try {
        username = username.replace(/-/, ' ');
        console.log(username);

        const response = await fetch(`${apiUrl}/profile/${username}`);
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log('Failed to fetch user:', error);
      }
    };

    const path = window.location.pathname;
    const username = path.split('/').pop();
    if (username) {
      fetchuser(username);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          height: 'calc(100vh - 64px)',
        }}
      >
        <BackgroundBanner />
        <Container sx={{}}>
          <ProfileBanner
            name={user.name}
            role={`blah blah blah I work @ Snap`}
            avatarUrl={user.picture}
            alt={user.name}
          />
          <Stack
            paddingLeft={3}
            direction="row"
            sx={{ width: '100%', justifyContent: 'space-between' }}
          >
            {/* Tabs */}
            <Box sx={{ width: '60%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} textColor="inherit">
                  <Tab label="About Me" />
                  <Tab label="Compliments" />
                </Tabs>
              </Box>
              <Box mt={3}>
                <TabPanel index={0} value={value}>
                  {about}
                </TabPanel>
                <TabPanel index={1} value={value}>
                  <Compliment/>
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
}
