import { Box, Button } from "@mui/material";

const apiUrl = process.env.REACT_APP_API_URL;

const RoleSelector = ({ sx, buttonSize, setFilteredUsers }) => {
  const fetchStudentsAPI = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/directory/getStudents`);
      const data = await response.json();
      console.log("fetching students", data);
      setFilteredUsers(data);
    } catch (error) {
      console.log("Failed to fetch students:", error);
    }
  };

  const fetchMentorsAPI = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/directory/getMentors`);
      const data = await response.json();
      console.log(data);
      setFilteredUsers(data);
    } catch (error) {
      console.log("Failed to fetch mentors:", error);
    }
  };

  const fetchAlumniAPI = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/directory/getAlumni`);
      const data = await response.json();
      console.log(data);
      setFilteredUsers(data);
    } catch (error) {
      console.log("Failed to fetch alumni:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, ...sx }}>
      <Button
        sx={{
          borderRadius: 0,
          borderBottom: 1,
          borderColor: "transparent",
          "&:hover": {
            borderBottom: 1,
          },
          paddingBottom: 0,
          fontSize: buttonSize,
        }}
        onClick={fetchStudentsAPI}
        color="inherit"
      >
        Students
      </Button>
      <Button
        sx={{
          borderRadius: 0,
          borderBottom: 1,
          borderColor: "transparent",
          "&:hover": {
            borderBottom: 1,
          },
          paddingBottom: 0,
          fontSize: buttonSize,
        }}
        onClick={fetchMentorsAPI}
        color="inherit"
      >
        Mentors
      </Button>
      <Button
        sx={{
          borderRadius: 0,
          borderBottom: 1,
          borderColor: "transparent",
          "&:hover": {
            borderBottom: 1,
          },
          paddingBottom: 0,
          fontSize: buttonSize,
        }}
        onClick={fetchAlumniAPI}
        color="inherit"
      >
        Alumni
      </Button>
    </Box>
  );
};

export default RoleSelector;
