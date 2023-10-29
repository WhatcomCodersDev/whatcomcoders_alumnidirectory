import { CardMedia } from "@mui/material";
import stockPhoto from "../../static/stock_photo.jpeg";

const Photo = ({ data, isFullscreen }) => {
  return (
    <CardMedia
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: isFullscreen ? "100%" : "200px",
        width: isFullscreen ? "100%" : "200px",
        borderRadius: "0%", // Remove rounding
        backgroundSize: "cover",
        transition: "height 0.3s, width 0.3s",
        ":hover": {
          transform: "scale(1.05)",
          transition: "transform 0.3s",
        },
        maxWidth: "600px",
        maxHeight: "600px",
      }}
      className="card-media"
      image={data.picture || stockPhoto}
      title="Photo of User"
    />
  );
};

export default Photo;
