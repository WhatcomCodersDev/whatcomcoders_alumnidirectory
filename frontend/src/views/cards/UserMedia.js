import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import GithubIcon from "@mui/icons-material/GitHub";
import { Link, Box } from "@mui/material";

const UserMedia = ({ data, isFullscreen }) => {
  return (
    <Box
      className="interest-icons"
      sx={{
        marginY: 2,
      }}
    >
      {data.linkedinUrl && (
        <Link
          href={data.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ marginRight: "5px" }} // Added marginRight here
        >
          <LinkedInIcon sx={{ color: "#0e76a8" }} fontSize="large" />
          {/* LinkedIn blue */}
        </Link>
      )}
      {data.githubUrl && (
        <Link
          href={data.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ marginRight: "5px" }} // Added marginRight here
        >
          <GithubIcon sx={{ color: "black" }} fontSize="large" />
          {/* GitHub black */}
        </Link>
      )}

      {data.personalWebsiteUrl && (
        <Link
          href={data.personalWebsiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ marginRight: "5px" }} // Added marginRight here
        >
          <PublicIcon className="icon" fontSize="large" />
        </Link>
      )}
    </Box>
  );
};

export default UserMedia;
