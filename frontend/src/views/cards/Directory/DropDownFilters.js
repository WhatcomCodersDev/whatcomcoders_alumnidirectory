import React, { useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const apiUrl = process.env.REACT_APP_API_URL;

const DropDownFilters = ({ sx, setFilteredUsers }) => {
  const [meetMeFor, setMeetMeFor] = useState("");
  const [areasOfExpertise, setAreasOfExpertise] = useState("");
  const [skills, setSkills] = useState("");

  const fetchFilteredUsers = async (filterType, value) => {
    let endpoint = "";
    switch (filterType) {
      case "meetMeFor":
        endpoint = `/api/directory/getMeetMeFor?filter=${value}`;
        break;
      case "areasOfExpertise":
        endpoint = `/api/directory/getAreasOfExpertise?filter=${value}`; // Assuming query parameter
        break;
      case "skills":
        endpoint = `/api/directory/getSkills?filter=${value}`; // Assuming query parameter
        break;
      default:
        //   endpoint = `/api/directory/`;
        return;
    }

    try {
      const response = await fetch(`${apiUrl}${endpoint}`);
      const data = await response.json();
      console.log(data);
      setFilteredUsers(data);
    } catch (error) {
      console.log(`Failed to fetch ${filterType}:`, error);
    }
  };

  const handleDropdownChange = (filterType) => (e) => {
    const value = e.target.value;
    // Update local state immediately
    if (filterType === "meetMeFor") {
      setMeetMeFor(value);
    } else if (filterType === "areasOfExpertise") {
      setAreasOfExpertise(value);
    } else if (filterType === "skills") {
      setSkills(value);
    }
    // Fetch and filter users based on the selected filter
    fetchFilteredUsers(filterType, value);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start", // Align items to the start
          flexWrap: "wrap", // Allow items to wrap if needed
          gap: 2, // Maintain gap between items
          marginY: 2,
          ...sx,
        }}
      >
        <FormControl
          sx={{
            minWidth: 150,
            flexGrow: 1,
            maxWidth: "25%",
            bgcolor: "white",
            borderRadius: 2,
          }}
        >
          <InputLabel>Meet Me For</InputLabel>
          <Select
            value={meetMeFor}
            label="meet me for"
            onChange={handleDropdownChange("meetMeFor")}
            sx={{ boxShadow: 5 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="coffeeChats">Coffee Chats</MenuItem>
            <MenuItem value="resumeReview">Resume Reviews</MenuItem>
            <MenuItem value="mentorship">Mentorship</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{
            minWidth: 200,
            flexGrow: 1,
            maxWidth: "25%",
            bgcolor: "white",
            borderRadius: 2,
          }}
        >
          <InputLabel>Area of Expertise</InputLabel>
          <Select
            value={areasOfExpertise}
            label="area of expertise"
            onChange={handleDropdownChange("areasOfExpertise")}
            sx={{ boxShadow: 5 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="frontend">Frontend Dev</MenuItem>
            <MenuItem value="backend">Backend Dev</MenuItem>
            <MenuItem value="fullstack">Full Stack Dev</MenuItem>
            <MenuItem value="design">Design</MenuItem>
            <MenuItem value="marketing">Marketing</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{
            minWidth: 120,
            flexGrow: 1,
            maxWidth: "20%",
            bgcolor: "white",
            borderRadius: 2,
          }}
        >
          <InputLabel>Industry</InputLabel>
          <Select
            value={skills}
            label="industry" // industry = skills
            onChange={handleDropdownChange("skills")}
            sx={{ boxShadow: 5 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="tech">Tech</MenuItem>
            <MenuItem value="finance">Finance</MenuItem>
            <MenuItem value="healthcare">Healthcare</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default DropDownFilters;
