import React, { useState } from "react";
import { ClickAwayListener, Card, Box } from "@mui/material";
import Photo from "./Photo";
import DescriptionCard from "./Description";
import PersonalInfo from "./PersonalInfo";
import GeneralInfo from "./GeneralInfo";

const ProfileCard = ({ data }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleToggleFullscreen = (e) => {
    if (!isFullscreen) {
      const cardMediaElement = document.querySelector(
        ".MuiCard-root.profile-card"
      );
      if (cardMediaElement && cardMediaElement.contains(e.target)) {
        return;
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const handleClickAway = () => {
    setIsFullscreen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          margin: "2px",
          transform: "scale(0.9)",
          position: "relative",
          display: "inline-block",
          transition: "all 0.3s",
          alignItems: "center",
          width: isFullscreen ? "90%" : "90%",
          height: isFullscreen ? "90%" : "90%",
          maxHeight: isFullscreen ? null : "525px",
          maxWidth: isFullscreen ? null : "600px",
          overflow: "hidden",
          ...(isFullscreen && {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            zIndex: 1000,
            // transform: "translate(90%, 30%)", // Centers the card
          }),
        }}
      >
        <Card
          sx={{
            width: isFullscreen ? "90%" : "80%",
            height: isFullscreen ? "90%" : "80%",
            cursor: "pointer",
            transition: "all 0.3s",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: isFullscreen
              ? "0 10px 20px rgba(0, 0, 0, 0.2)"
              : "0 4px 8px rgba(0, 0, 0, 0.1)",
            ":hover": {
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
            },
            border: "3px solid #333", // Add this line for the outline
          }}
          onClick={handleToggleFullscreen}
        >
          <Photo data={data} isFullscreen={isFullscreen} />
          <GeneralInfo data={data} isFullscreen={isFullscreen} />
          <DescriptionCard data={data} isFullscreen={isFullscreen} />
          <PersonalInfo data={data} isFullscreen={isFullscreen} />
        </Card>
      </Box>
    </ClickAwayListener>
  );
};

export default ProfileCard;
