import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("isLoggedIn", isLoggedIn);

  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
