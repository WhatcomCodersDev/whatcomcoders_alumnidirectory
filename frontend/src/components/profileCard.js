import "../styles/theme.css";
import "../styles/profileCard.css";
import React, { useState } from "react";
import {
  CardContent,
  Typography,
  ClickAwayListener,
  Card,
  CardMedia,
} from "@mui/material";
import stockPhoto from "../static/stock_photo.jpeg";
import { PopupButton } from "react-calendly";

const ProfileCard = ({ data }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleClickAway = () => {
    setIsFullscreen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={`card-container ${isFullscreen ? "fullscreen" : ""}`}>
        <Card
          className={`profile-card ${isFullscreen ? "fullscreen" : ""}`}
          onClick={handleToggleFullscreen}
        >
          <CardMedia
            className="card-media"
            image={data.picture || stockPhoto}
            title="Photo of User"
          />
          {isFullscreen && (
            <CardContent className="card-content">
              <Typography variant="body2">
                {data.description || "Lorem ipsum..."}
              </Typography>
              <PopupButton
                className="popup-button"
                url="https://calendly.com/soto26938"
                rootElement={document.getElementById("root")}
                text="Meet Me!"
              />
            </CardContent>
          )}
        </Card>
        <div className="user-info">
          <Typography variant="h6">{data.name || "Name"}</Typography>
          <Typography variant="body2">
            {data.company || ""} - {data.jobTitle || ""}
          </Typography>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default ProfileCard;
