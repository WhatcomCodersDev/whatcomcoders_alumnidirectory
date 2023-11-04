import { CardMedia } from "@mui/material";
import stockPhoto from "../../static/stock_photo.jpeg";

const Photo = ({ data, isFullscreen }) => {
  return (
    <CardMedia
      sx={{
        flexShrink: 0,
        // objectFit: "cover",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // border: "1px solid red", // For debugging
        height: isFullscreen ? "250px" : "200px",
        width: isFullscreen ? "250px" : "200px",
        borderRadius: "50%", // Remove rounding
        backgroundSize: "cover",
        transition: "height 0.3s, width 0.3s",
        marginBottom: isFullscreen ? "20px" : "-200px",
        //viettech
        // margin: "0 auto",
        // marginTop: "-50px",

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
