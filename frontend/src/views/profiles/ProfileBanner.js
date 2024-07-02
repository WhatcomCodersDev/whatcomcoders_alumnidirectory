import React from "react";
import {
  Avatar,
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UserMedia from "./UserMedia";

const apiUrl = process.env.REACT_APP_API_URL;

const ProfileAvatar = styled(Avatar)(({ theme, spacing }) => ({
  width: theme.spacing(spacing),
  height: theme.spacing(spacing),
  [theme.breakpoints.down("lg")]: {
    width: theme.spacing(spacing / 1.5),
    height: theme.spacing(spacing / 1.5),
  },
  [theme.breakpoints.down("md")]: {
    width: theme.spacing(spacing / 2),
    height: theme.spacing(spacing / 2),
  },
  [theme.breakpoints.down("sm")]: {
    width: theme.spacing(spacing / 3),
    height: theme.spacing(spacing / 3),
  },
}));


const ProfileBanner = ({ sx, name, role, company, avatarUrl, data }) => {
  const sendIntroEmail = async () => {
    const path = window.location.pathname;
    const nameSlug = path.split("/").pop();

    try {
      const response = await fetch(`${apiUrl}/profile/${nameSlug}/email`);
      const data = await response.json();
      console.log("Email sent:", data);
    } catch (error) {
      console.log("Failed to send an intro email:", error);
    }
  };

  return (
    <Stack spacing={2} sx={{ ...sx }}>
      <ProfileAvatar src={avatarUrl} spacing={40} variant="rounded" />
      <Stack spacing={2}>
        {/* Name, Roles and Socials*/}
        <Box>
          <Typography variant="h4" fontWeight="medium">
            {name}
          </Typography>
          <Typography variant="h5" fontWeight="light">
            {role} at {company}
          </Typography>
        </Box>

        {/* Buttons to meet */}
        <UserMedia data={data}>
          <IconButton
            color="primary"
            aria-label="Get Intro"
            size="small"
            sx={{ padding: 0, paddingBottom: 0.4}}
            onClick={sendIntroEmail}
          >
            <MailIcon fontSize="large" />
          </IconButton>
        </UserMedia>
      </Stack>
    </Stack>
  );
};

export { ProfileAvatar };
export default ProfileBanner;
