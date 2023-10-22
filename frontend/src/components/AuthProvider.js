import React, { useState, useEffect, createContext } from "react";
import { AuthContext } from "../contexts/authContext";

const apiUrl = process.env.REACT_APP_API_URL;

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState(null);

  const fetchCurrentUserAPI = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/current_user`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Response Error: ${response.status} - ${errorText}`);
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const responseBody = await response.json();
      console.log(responseBody);
      return responseBody;
    } catch (error) {
      console.error("Request failed:", error.message);
    }
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        let response = await fetchCurrentUserAPI();
        if (response && response.name) {
          setIsLoggedIn(true);
          setUserName(response.name);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
