import React from 'react';
import { CardContent, Typography } from '@mui/material';

const DescriptionCard = ({ data, isFullscreen }) => {
  const formattedDescription = (description) => {
    if (!description) return 'Lorem ipsum...';
    return description.split('\n').map((str, index, array) =>
      index === array.length - 1 ? (
        str
      ) : (
        <>
          {str} <br />
        </>
      )
    );
  };
  return (
    <CardContent
      sx={{
        // whiteSpace: 'wrap',
        // overflow: 'auto',
        // textOverflow: 'ellipsis',
        // height: isFullscreen ? '200px' : '200px',
        // width: isFullscreen ? '100%' : '100%',
        maxWidth: '500px',
        // margin: "auto",
        // marginBottom: 1,
        background: 'transparent',
        boxSizing: 'border-box', // Include padding and borders in the element's dimensions
        marginBottom: 2, // Make sure the bottom margin is 0
        border: '1px solid black', // For debugging

        display: isFullscreen ? 'block' : 'none',
        // padding: isFullscreen ? 2 : null,
        // overflowY: isFullscreen ? 'auto' : 'hidden',
        zIndex: isFullscreen ? 10 : null,
      }}
    >
      <Typography
        variant='body'
        sx={{
          marginY: 1,
          textDecoration: 'none',
          textTransform: 'none',
          paragraph: true,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {isFullscreen ? formattedDescription(data.description) : ''}
      </Typography>
    </CardContent>
  );
};

export default DescriptionCard;
