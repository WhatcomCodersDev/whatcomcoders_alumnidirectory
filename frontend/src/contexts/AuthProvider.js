import React, { useState, useEffect } from 'react';
import { AuthContext } from './authContext';

const apiUrl = process.env.REACT_APP_API_URL;

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userSlug, setUserSlug] = useState(null);
  const [userProfilePic, setUserProfilePic] = useState('');

  const fetchCurrentUserAPI = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/current_user`, {
        method: 'GET',
        credentials: 'include',
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
      console.error('Request failed:', error.message);
    }
  };

  const logout = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/logout`,
        {
          method: 'POST',
          credentials: 'include',
        }
      );
      if (response.ok) {
        setIsLoggedIn(false);
        setUserName(null);
        setUserSlug(null);
        setUserProfilePic('');
      } else {
        const errorText = await response.text();
        console.error(`Logout Error: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        let response = await fetchCurrentUserAPI();
        console.log(response.name);
        if (response && response.name) {
          setIsLoggedIn(true);
          setUserName(response.name);
          setUserSlug(response.user_slug);
          setUserProfilePic(response.picture);
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
    <AuthContext.Provider
      value={{ isLoggedIn, userName, userSlug, logout, userProfilePic }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
