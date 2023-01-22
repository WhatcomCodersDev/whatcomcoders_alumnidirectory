import ProfileCard from './components/profileCard';
import './App.css';
import { Routes, Route } from "react-router-dom";
import SignIn from './components/signIn';
import React from 'react';
import Axios from "axios";

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    Axios.get("http://localhost:4000/auth/google", {
      headers: {
        "Access-Control-Allow-Origin": "* ",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }).then((res) => {
      window.location.assign(res.data.auth_url);
    }).catch((err) => console.log(err));
  };

  return (
      <Routes>
        <Route
          exact
          path="/login"
          element={<SignIn login={handleClick}></SignIn>}
          />
        <Route
          path="/"
          element={<ProfileCard/>}
        />
      </Routes>
  );
}

export default App;
