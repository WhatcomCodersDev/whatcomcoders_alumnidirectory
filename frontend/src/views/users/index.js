import React, { useState, useEffect, useContext } from 'react';
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
import UserBanner from './UserBanner';
import { AuthContext } from 'contexts/authContext';

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

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(22),
  height: theme.spacing(22),
  border: `6px solid ${theme.palette.background.paper}`,
}));

const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
}));

const StickyPaper = styled(Paper)(({ theme }) => ({
  position: 'sticky',
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
        backgroundSize: 'cover',
        width: '100%',
        height: 200,
      }}
    ></Box>
  );
};

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
        <Typography variant='h5'>{sectionTitle}</Typography>
      </Box>
      <Stack
        direction='row'
        spacing={1}
        mt={3}
        useFlexGap
        flexWrap='wrap'
        sx={{ width: '100%' }}
      >
        {list.map((item, index) => (
          <Chip key={index} label={item} />
        ))}
      </Stack>
    </>
  );
};

const UserView = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const { userSlug } = useContext(AuthContext);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async (userSlug) => {
      try {
        const response = await fetch(`${apiUrl}/profile/${userSlug}`);
        const data = await response.json();
        console.log(data);
        setPerson(data);
      } catch (error) {
        console.log('Failed to fetch person:', error);
      }
    };

    if (userSlug) {
      fetchPerson(userSlug);
    }
  }, [userSlug]);

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
          height: 'calc(100vh - 64px)',
        }}
      >
        <BackgroundBanner
          imageUrl={`https://i.pinimg.com/originals/1a/5e/69/1a5e69e95c90693cdda00d158805ad49.jpg`}
        />
        <Container sx={{}}>
          <UserBanner
            name={person.name}
            role={person.jobTitle}
            company={person.company}
            avatarUrl={person.picture}
            data={person}
            emailReachOutCount={person.emailReachOutCount}
          />
          <Stack
            paddingLeft={3}
            direction='row'
            sx={{ width: '100%', justifyContent: 'space-between' }}
          >
            {/* Tabs */}
            <Box sx={{ width: '60%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} textColor='inherit'>
                  <Tab label='About Me' />
                  <Tab label='Compliments' />
                </Tabs>
              </Box>
              <Box mt={3}>
                <TabPanel
                  index={0}
                  value={value}
                  sx={{
                    boxSizing: 'border-box', // Include padding and borders in the element's dimensions
                    // border: '1px solid black', // For debugging
                    overflowY: 'auto',
                    maxHeight: '300px',
                    marginBottom: 2, // Make sure the bottom margin is 0
                  }}
                >
                  {person.description}
                </TabPanel>
                <TabPanel index={1} value={value}>
                  list of compliments
                </TabPanel>
              </Box>
            </Box>
            <StickyPaper>
              <SkillsSection sectionTitle='Skills' list={skills} />
              <SkillsSection sectionTitle='Meet me for' list={services} />
            </StickyPaper>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default UserView;
