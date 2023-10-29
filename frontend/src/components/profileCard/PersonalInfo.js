import CoffeeIcon from "@mui/icons-material/Coffee";
import BusinessIcon from "@mui/icons-material/Business";
import BookIcon from "@mui/icons-material/Book";

const PersonalInfo = ({ data, isFullscreen }) => {
  return (
    <div className="interest-icons">
      {data.coffeeChat && <CoffeeIcon className="icon" fontSize="small" />}
      {data.referral && <BusinessIcon className="icon" fontSize="small" />}
      {data.mentoring && <BookIcon className="icon" fontSize="small" />}
    </div>
  );
};

export default PersonalInfo;
