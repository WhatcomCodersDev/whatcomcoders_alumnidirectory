import { createContext } from 'react';
export const AuthContext = createContext({
  isLoggedIn: false,
  uuid: '',
  userName: {},
  logout: () => {},
  userProfilePic: '',
});
