import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/GitHub";

import { Link } from "@mui/material";
import { Box } from "@mui/material";

const UserMedia = ({ data, isFullscreen }) => {
  return (
    <Box
      sx={{
        // border: "1px solid red", // For debugging
        height: isFullscreen ? "100px" : "70px",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="interest-icons">
        {data.linkedinUrl && (
          <Link
            href={data.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="icon" fontSize="large" />
            <GithubIcon className="icon" fontSize="large" />
            <TwitterIcon className="icon" fontSize="large" />
          </Link>
        )}
      </div>
    </Box>
  );
};

export default UserMedia;
