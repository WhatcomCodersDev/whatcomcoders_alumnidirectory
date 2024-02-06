import React from 'react';
import { Box, styled } from '@mui/material';

const StyledBackgroundBanner = styled(Box)(({ imageUrl }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1,
  // Default style when no image is provided
  ...(imageUrl
    ? {}
    : {
        backgroundColor: '#000',
        '&::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%)',
        },
      }),
}));

const BackgroundBanner = ({ imageUrl }) => {
  return <StyledBackgroundBanner imageUrl={imageUrl} />;
};

export default BackgroundBanner;
