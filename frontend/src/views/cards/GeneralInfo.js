import { Typography, Button, Box, CardContent } from "@mui/material";
import UserMedia from "./UserMedia";

const GeneralInfo = ({ data, isFullscreen }) => {
  return (
    <CardContent
      sx={{
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {data.name || "Name"}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: "18px",
          fontWeight: 400,
          color: "grey",
        }}
      >
        {data.company || ""} <br />
        {data.jobTitle || ""}
      </Typography>
      <UserMedia data={data} isFullscreen={isFullscreen} />
    </CardContent>
  );
};

export default GeneralInfo;
