import { Link } from "react-router-dom";
import logo from "../static/logo.png";
const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="whatcom coders logo"
        style={{ width: 42, height: 42, backgroundColor: "white" }}
      />
    </Link>
  );
};

export default Logo;
