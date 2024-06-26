import React from "react";
import Photo from "./Photo";
import DescriptionCard from "./Description";
import GeneralInfo from "./GeneralInfo";
import UserMedia from "./UserMedia";
import { Card, Container } from "@mui/material";

const ProfileCard = ({ data, onToggleFullscreen, isFullscreen }) => {
  const handleCardClick = (e) => {
    console.log(data.user_slug);
    const userProfileUrl = `/profile/${data.user_slug}`;
    window.open(userProfileUrl, "_blank");
  };

  // const handleToggleFullscreen = (e) => {
  //   e.stopPropagation();
  //   if (!isFullscreen) {
  //     const cardMediaElement = document.querySelector(
  //       '.MuiCard-root.profile-card'
  //     );
  //     if (cardMediaElement && cardMediaElement.contains(e.target)) {
  //       return;
  //     }
  //     onToggleFullscreen();
  //   }
  // };

  return (
    <Card
      sx={{
        width: isFullscreen ? 500 : 300,
        maxHeight: isFullscreen ? "80%" : 513,
        height: isFullscreen ? "90%" : "80%",
        cursor: "pointer",
        transition: "all 0.3s",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: isFullscreen
          ? "0 10px 20px rgba(0, 0, 0, 0.2)"
          : "0 4px 8px rgba(0, 0, 0, 0.1)",
        ":hover": {
          boxShadow: isFullscreen
            ? "0 6px 12px rgba(0, 0, 0, 0.15)"
            : "0 0 15px rgba(255, 255, 255, 0.5)", // Add an outer and inner glow effect
          transform: isFullscreen ? null : "scale(1.05)", // Slightly scale up the card,
        },
      }}
      onClick={handleCardClick}
    >
      <Photo data={data} isFullscreen={isFullscreen} />
      <GeneralInfo data={data} isFullscreen={isFullscreen} />
    </Card>
  );
};

export default ProfileCard;
