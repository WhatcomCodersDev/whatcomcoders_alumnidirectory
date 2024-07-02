import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import GithubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

import { Link, Grid, IconButton, Stack } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const UserMedia = ({ data, children }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        textAlign: "center",
      }}
    >
      <Stack direction="row" spacing={2}>
        {data.linkedinUrl && (
          <Link
            href={data.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            // Added marginRight here
          >
            <LinkedInIcon fontSize="large" />
            {/* LinkedIn blue */}
          </Link>
        )}
        {data.githubUrl && (
          <Link href={data.githubUrl} target="_blank" rel="noopener noreferrer">
            <GithubIcon fontSize="large" />
          </Link>
        )}
        {data.personalWebsiteUrl && (
          <Link
            href={data.personalWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PublicIcon fontSize="large" />
          </Link>
        )}
      </Stack>
      <Stack direction="row" spacing={2}>
        {data.calendlyUrl && (
          <Link
            href={data.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CalendarMonthIcon fontSize="large" />
          </Link>
        )}
        {children}
      </Stack>
    </Stack>
  );
};

export default UserMedia;
