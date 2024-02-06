import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import NavBar from 'components/NavBar';
import FootBar from 'components/FootBar';
// import useAuth from 'hooks/useAuth';

const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.default,
  minHeight: '100%',
  flex: '1 1 auto',
}));

const MentorLayout = () => {
  //   const { user, logout } = useAuth();

  // top bar open state & function
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const onMobileNavOpen = () => {
    setMobileNavOpen(true);
  };

  return (
    <Root>
      <NavBar />
      <div style={{ top: 64 }}>
        <Outlet />
      </div>
      <FootBar />
    </Root>
  );
};

export default MentorLayout;
