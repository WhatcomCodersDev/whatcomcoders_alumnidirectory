import React, { useState, useEffect } from 'react';
import { Slide, Fade, Box } from '@mui/material';

const WelcomeBanner = ({ currentFormStep }) => {
  const [triggerSlide, setTriggerSlide] = useState(false);

  const getParagraph = (step) => {
    switch (step) {
      case 0:
        return "Let's get to know you a little better.";
      case 1:
        return 'Please share any external links like LinkedIn, GitHub, or your personal website!';
      case 2:
        return 'What are things people should reach out to you for?';
      default:
        return 'Welcome!';
    }
  };

  useEffect(() => {
    // Set a timeout equal to the fade-in duration before triggering the slide
    const timer = setTimeout(() => {
      setTriggerSlide(true);
    }, 1000); // Assuming the fade-in takes 1000ms to complete

    // Reset triggerSlide on component unmount or when currentFormStep changes
    // to restart the animations sequence for new step
    return () => {
      clearTimeout(timer);
      setTriggerSlide(false);
    };
  }, [currentFormStep]);

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Fade in={true} timeout={2000}>
        <h1>Welcome to the community!</h1>
      </Fade>
      {triggerSlide && (
        <Slide
          direction='left'
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={500}
        >
          <p>{getParagraph(currentFormStep)}</p>
        </Slide>
      )}
    </Box>
  );
};

export default WelcomeBanner;
