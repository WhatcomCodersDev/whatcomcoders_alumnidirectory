import React from "react";
import { Avatar, Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UserMedia from "../UserMedia";

const ProfileAvatar = styled(Avatar)(
  ({ theme, spacing, hasBorder = true }) => ({
    width: theme.spacing(spacing),
    height: theme.spacing(spacing),
    border: hasBorder ? `6px solid ${theme.palette.background.paper}` : "none",
  })
);

const apiUrl = process.env.REACT_APP_API_URL;

const ProfileBanner = ({ name, role, company, avatarUrl, data }) => {
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
    <Stack
      direction="row"
      spacing={2}
      sx={{
        mt: -5,
        mb: 10,
      }}
    >
      <ProfileAvatar src={avatarUrl} spacing={22} />
      <Stack sx={{ width: "100%" }}>
        <Box sx={{ height: 70 }} />
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Name, Roles and Socials*/}
          <Stack>
            <Typography variant="h1" fontWeight={"bold"}>
              {name}
            </Typography>
            <Typography fontWeight={"medium"}>
              {role} at {company}
            </Typography>
            <UserMedia data={data} />
          </Stack>

          {/* Buttons to meet */}
          <Stack direction="row" spacing={2} sx={{ height: 50 }}>
            <Button
              variant="outlined"
              size="medium"
              startIcon={<MailIcon />}
              onClick={sendIntroEmail}
            >
              Get intro
            </Button>
            {data.calendlyUrl && (
              <Button
                variant="outlined"
                size="medium"
                startIcon={<CalendarMonthIcon />}
                href={data.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Meet me!
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { ProfileAvatar };
export default ProfileBanner;
