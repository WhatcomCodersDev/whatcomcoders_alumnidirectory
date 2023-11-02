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
          {" "}
          {str} <br />
        </>
      )
    );
  };
  return (
    <CardContent
      sx={{
        whiteSpace: "wrap",
        overflow: "hidden",
        overflowY: isFullscreen ? "scroll" : "hidden",
        textOverflow: "ellipsis",
        // maxHeight: "200px",
        // maxWidth: "800px",
        margin: "auto",
        height: isFullscreen ? "auto" : "200px",
        ...(isFullscreen && {
          display: "block",
          padding: 2,
          overflowY: "scroll",
          zIndex: 10,
        }),
      }}
    >
      <Typography
        variant="body1"
        sx={{
          marginY: 2,
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
