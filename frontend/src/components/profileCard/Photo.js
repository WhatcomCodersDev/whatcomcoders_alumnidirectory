import { CardMedia } from "@mui/material";
import stockPhoto from "../../static/stock_photo.jpeg";

const Photo = ({ data, isFullscreen }) => {
  return (
    <CardMedia
      className="card-media"
      image={data.picture || stockPhoto}
      title="Photo of User"
    />
  );
};

export default Photo;
