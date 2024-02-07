// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Box,
//   Avatar,
//   Typography,
//   Chip,
//   Container,
//   Button,
//   Card,
//   CardContent,
// } from '@mui/material';

// import { styled } from '@mui/material/styles';
// import BackgroundBanner from '../../components/BackgroundBanner';

// const apiUrl = process.env.REACT_APP_API_URL;

// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

// const ProfileContainer = styled(Container)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   position: 'relative',
//   top: '-50px', // Adjust this value as needed
//   textAlign: 'center',
//   backgroundColor: '#f5f5f5', // Replace with your desired color
//   borderRadius: theme.shape.borderRadius,
//   padding: theme.spacing(4),
// }));

// const ProfileAvatar = styled(Avatar)(({ theme }) => ({
//   width: theme.spacing(15),
//   height: theme.spacing(15),
//   border: `3px solid ${theme.palette.background.paper}`,
// }));

// const ProfileViews = () => {
//   const [person, setPerson] = useState(null);
//   useEffect(() => {
//     const fetchPerson = async (username) => {
//       try {
//         username = username.replace(/-/, ' ');
//         console.log(username);

//         const response = await fetch(`${apiUrl}/profile/${username}`);
//         const data = await response.json();
//         console.log(data);
//         setPerson(data);
//       } catch (error) {
//         console.log('Failed to fetch person:', error);
//       }
//     };

//     const path = window.location.pathname;
//     const username = path.split('/').pop();
//     if (username) {
//       fetchPerson(username);
//     }
//   }, []);

//   if (!person) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Offset />
//       <Box sx={{ bgcolor: '#e0e0e0', height: 'calc(100vh - 64px)' }}>
//         <ProfileContainer />
//         {/* Adjust height */}
//         <ProfileAvatar src={person.picture} alt={person.name} />

//         <Typography variant='h5' component='h1' gutterBottom>
//           {person.name}
//         </Typography>
//         <Typography variant='subtitle1' gutterBottom>
//           {person.title}
//         </Typography>

//         <Button variant='contained' color='primary'>
//           Contact
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export default ProfileViews;

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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProfileBanner from './ProfileBanner';

const about = `I'm the certified coders pimp.\nAs my mentees, you'll be part of the CORE gang (Code-Whore). \nAfter receiving my wisdom, 11/10 of my COREs now work at FAANG companies.`;
const skills = [
  'Full-stack',
  'Deep Learning',
  'ML',
  'Python',
  'Go',
  'Interview',
  'Code Reviews',
  'Computer Systems',
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
  height: 200,
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

export default function ProfileViews() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [person, setPerson] = useState(null);
  useEffect(() => {
    const fetchPerson = async (nameSlug) => {
      try {
        nameSlug = nameSlug.replace(/-/, ' ');
        console.log(nameSlug);

        const response = await fetch(`${apiUrl}/profile/${nameSlug}`);
        const data = await response.json();
        console.log(data);
        setPerson(data);
      } catch (error) {
        console.log('Failed to fetch person:', error);
      }
    };

    const path = window.location.pathname;
    const username = path.split('/').pop();
    if (username) {
      fetchPerson(username);
    }
  }, []);

  if (!person) {
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
        <BackgroundBanner
          imageUrl={`https://i.pinimg.com/originals/1a/5e/69/1a5e69e95c90693cdda00d158805ad49.jpg`}
        />
        <Container sx={{}}>
          <ProfileBanner
            name={person.name}
            role={person.title}
            avatarUrl={person.picture}
          />
          <Box paddingLeft={3}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} textColor='inherit'>
                <Tab label='About Me' />
                <Tab label='Compliments' />
              </Tabs>
            </Box>
            <Box mt={3}>
              <TabPanel index={0} value={value}>
                {about}
              </TabPanel>
              <TabPanel index={1} value={value}>
                list of compliments
              </TabPanel>
            </Box>
            <StickyPaper>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant='h5'>Skills</Typography>
              </Box>
              <Stack
                direction='row'
                spacing={2}
                mt={3}
                sx={{ width: '100%', bgcolor: 'red' }}
              >
                {skills.map((item, index) => (
                  <Chip key={index} label={item} />
                ))}
              </Stack>
            </StickyPaper>
          </Box>
        </Container>
      </Box>
    </>
  );
}
