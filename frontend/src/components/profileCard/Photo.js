import { CardMedia } from "@mui/material";
import stockPhoto from "../../static/stock_photo.jpeg";

const Photo = ({ data, isFullscreen }) => {
  return (
    <CardMedia
      sx={{
        flexShrink: 0,
        objectFit: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: isFullscreen ? "40%" : "200px",
        width: isFullscreen ? "30%" : "200px",
        borderRadius: "0%", // Remove rounding
        backgroundSize: "cover",
        transition: "height 0.3s, width 0.3s",
        ":hover": {
          transform: "scale(1.05)",
          transition: "transform 0.3s",
        },
      }}
      className="card-media"
      image={data.picture || stockPhoto}
      title="Photo of User"
    />
  );
};

export default Photo;
