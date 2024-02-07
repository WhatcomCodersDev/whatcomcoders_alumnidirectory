import React from 'react';
import { ClickAwayListener, Card, Container } from '@mui/material';
import Photo from './Photo';
import DescriptionCard from './Description';
import PersonalInfo from './PersonalInfo';
import GeneralInfo from './GeneralInfo';
import UserMedia from './UserMedia';

const ProfileCard = ({ data, onToggleFullscreen, isFullscreen }) => {
  const handleCardClick = (e) => {
    console.log(data.user_slug);
    const userProfileUrl = `/profile/${data.user_slug}`;
    window.open(userProfileUrl, '_blank');
  };

  const handleToggleFullscreen = (e) => {
    e.stopPropagation();
    if (!isFullscreen) {
      const cardMediaElement = document.querySelector(
        '.MuiCard-root.profile-card'
      );
      if (cardMediaElement && cardMediaElement.contains(e.target)) {
        return;
      }
      onToggleFullscreen();
    }
  };

  return (
    <Container
      maxWidth='md'
      sx={{
        transition: 'all 0.3s',
        padding: '0',

        ...(isFullscreen && {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          // backgroundColor: 'rgba(0, 0, 0, 0.3)',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          zIndex: 1040,
        }),
      }}
    >
      <Card
        sx={{
          width: isFullscreen ? '100%' : '100%',
          maxWidth: isFullscreen ? '500px' : '200px',
          maxHeight: isFullscreen ? '80%' : '400px',
          height: isFullscreen ? '90%' : '80%',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: isFullscreen
            ? '0 10px 20px rgba(0, 0, 0, 0.2)'
            : '0 4px 8px rgba(0, 0, 0, 0.1)',
          ':hover': {
            boxShadow: isFullscreen
              ? '0 6px 12px rgba(0, 0, 0, 0.15)'
              : '0 0 15px rgba(255, 255, 255, 0.5)', // Add an outer and inner glow effect
            transform: isFullscreen ? null : 'scale(1.05)', // Slightly scale up the card,
          },
          border: '1.5px solid #333', // Add this line for the outline
        }}
        onClick={handleCardClick}
      >
        <Photo data={data} isFullscreen={isFullscreen} />
        <GeneralInfo data={data} isFullscreen={isFullscreen} />
        <DescriptionCard data={data} isFullscreen={isFullscreen} />
        {/* <PersonalInfo data={data} isFullscreen={isFullscreen} /> */}
        <UserMedia data={data} isFullscreen={isFullscreen} />
      </Card>
    </Container>
  );
};

export default ProfileCard;
