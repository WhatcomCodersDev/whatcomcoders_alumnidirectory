import "./styles/theme.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import React from "react";
import Axios from "axios";
import NavBar from "./components/NavBar";
import UserInfo from "./components/UserInfo";
import PrivateRoute from "./components/PrivateRoute";
import ProfileCardsDirectory from "./pages/ProfileCardsDirectory";

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    Axios.get(`${apiUrl}/auth/google`, {})
      .then((res) => {
        window.location.assign(res.data.auth_url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/login"
          element={<SignIn login={handleClick}></SignIn>}
        />
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/userinfo"
          element={<PrivateRoute component={UserInfo} />}
        />

        <Route path="/people" element={<ProfileCardsDirectory />} />
      </Routes>
    </div>
  );
}

export default App;
