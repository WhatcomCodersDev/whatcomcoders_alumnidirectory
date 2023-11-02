import { Typography, Button, Box } from "@mui/material";

const GeneralInfo = ({ data, isFullscreen }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: 2,
        fontWeight: "bold",
        height: "200px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: "24px",
          fontWeight: 600,
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

      {data.calendlyUrl && (
        <Button
          sx={{
            marginTop: 1,
            // marginBottom: 2,
            backgroundColor: "#00a2ff",
            color: "white",
            "&:hover": {
              backgroundColor: "#0071B3",
            },
            zIndex: 1100,
            position: "relative",
            ...(isFullscreen &&
              {
                // marginTop: 20,
              }),
          }}
          href={data.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Meet Me!
        </Button>
      )}
    </Box>
  );
};

export default GeneralInfo;
