import { Box, Button } from '@mui/material';

const apiUrl = process.env.REACT_APP_API_URL;

const RoleSelector = ({ setFilteredUsers }) => {
  const fetchStudentsAPI = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/directory/getStudents`);
      const data = await response.json();
      console.log(data);
      setFilteredUsers(data);
    } catch (error) {
      console.log('Failed to fetch students:', error);
    }
  };

  const fetchMentorsAPI = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/directory/getMentors`);
      const data = await response.json();
      console.log(data);
      setFilteredUsers(data);
    } catch (error) {
      console.log('Failed to fetch mentors:', error);
    }
  };

  const fetchAlumniAPI = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/directory/getAlumni`);
      const data = await response.json();
      console.log(data);
      setFilteredUsers(data);
    } catch (error) {
      console.log('Failed to fetch alumni:', error);
    }
  };

  return (
    <div>
      {/* Navigation Links */}
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button onClick={fetchStudentsAPI} color='inherit'>
          Students
        </Button>
        <Button onClick={fetchMentorsAPI} color='inherit'>
          Mentors
        </Button>
        <Button onClick={fetchAlumniAPI} color='inherit'>
          Alumni
        </Button>
      </Box>
    </div>
  );
};

export default RoleSelector;
