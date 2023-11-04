import React from "react";
import { CardContent, Typography } from "@mui/material";

const DescriptionCard = ({ data, isFullscreen }) => {
  const formattedDescription = (description) => {
    if (!description) return "Lorem ipsum...";
    return description.split("\n").map((str, index, array) =>
      index === array.length - 1 ? (
        str
      ) : (
        <>
          {str} <br />
        </>
      )
    );
  };
  return (
    <CardContent
      sx={{
        whiteSpace: "wrap",
        overflow: "scroll",
        textOverflow: "ellipsis",
        height: isFullscreen ? "200px" : "200px",
        width: "700px",
        margin: "auto",
        marginBottom: 1,
        border: "1px solid red", // For debugging

        display: isFullscreen ? "block" : "none",
        padding: isFullscreen ? 2 : null,
        overflowY: isFullscreen ? "auto" : "auto",
        zIndex: isFullscreen ? 10 : null,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          // marginY: 2,
          textDecoration: "none",
          textTransform: "none",
          paragraph: true,
        }}
      >
        {isFullscreen ? formattedDescription(data.description) : ""}
      </Typography>
    </CardContent>
  );
};

export default DescriptionCard;
