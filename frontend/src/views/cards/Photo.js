import { CardMedia } from "@mui/material";
import stockPhoto from "../../static/stock_photo.jpeg";

const Photo = ({ data, isFullscreen }) => {
  return (
    <CardMedia
      sx={{
        
        borderRadius: 3,
        transition: "height 0.3s, width 0.3s",
      }}
      height= "306"
      width= "297"
      component="img"
      image={data.picture || stockPhoto}
      title="Photo of User"
    />
  );
};

export default Photo;
