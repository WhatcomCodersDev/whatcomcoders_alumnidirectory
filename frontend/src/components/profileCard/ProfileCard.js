import "../../styles/profileCard.css";
import React, { useState } from "react";
import {
  CardContent,
  Typography,
  ClickAwayListener,
  Card,
  CardMedia,
} from "@mui/material";
import { PopupButton } from "react-calendly";
import CoffeeIcon from "@mui/icons-material/Coffee";
import BusinessIcon from "@mui/icons-material/Business";
import BookIcon from "@mui/icons-material/Book";
import Photo from "./Photo";

const ProfileCard = ({ data }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleToggleFullscreen = (e) => {
    if (isFullscreen === false) {
      const cardMediaElement = document.querySelector(
        ".MuiCard-root.profile-card"
      );
      if (cardMediaElement && cardMediaElement.contains(e.target)) {
        return;
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const handleClickAway = (e) => {
    setIsFullscreen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={`card-container ${isFullscreen ? "fullscreen" : ""}`}>
        <Card
          className={`profile-card ${isFullscreen ? "fullscreen" : ""}`}
          onClick={handleToggleFullscreen}
        >
          <Photo data={data} isFullscreen={isFullscreen} />

          {data.calendlyUrl && (
            <PopupButton
              className="popup-button"
              url="https://calendly.com/soto26938"
              rootElement={document.getElementById("root")}
              text="Meet Me!"
            />
          )}
          {isFullscreen ? (
            <CardContent className="card-content">
              <Typography variant="body2">
                {data.description || "Lorem ipsum..."}
              </Typography>
              {/* <div className="interest-icons">
                {data.coffeeChat && (
                  <CoffeeIcon className="icon" fontSize="small" />
                )}
                {data.referral && (
                  <BusinessIcon className="icon" fontSize="small" />
                )}
                {data.mentoring && (
                  <BookIcon className="icon" fontSize="small" />
                )}
              </div> */}
            </CardContent>
          ) : (
            <CardContent className="card-short-content">
              <Typography variant="body2" noWrap>
                {data.description?.substr(0, 100) + "..." || "Lorem ipsum..."}
                {/* {isFullscreen
                  ? data.description || "Lorem ipsum..."
                  : data.description.substr(0, 100) + "..."} */}
              </Typography>
              <div className="interest-icons">
                {data.coffeeChat && (
                  <CoffeeIcon className="icon" fontSize="small" />
                )}
                {data.referral && (
                  <BusinessIcon className="icon" fontSize="small" />
                )}
                {data.mentoring && (
                  <BookIcon className="icon" fontSize="small" />
                )}
              </div>
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
