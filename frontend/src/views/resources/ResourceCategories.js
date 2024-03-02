import React from 'react';
import { Typography, Box, Grid, Card, Link } from '@mui/material';
import styled from '@emotion/styled';

// Styled component for logos
const Logo = styled('img')({
  maxWidth: '100%', // Ensures the image does not exceed the container width
  maxHeight: '100%', // Ensures the image height does not exceed the container height
  objectFit: 'contain', // Keeps the aspect ratio of the image
});

const ResourceCategories = ({ categoryName, resources }) => {
  return (
    <div>
      <Typography variant='h4' gutterBottom>
        {categoryName.replace(/([a-z])([A-Z])/g, '$1 $2')}
      </Typography>
      <Grid container spacing={2} marginBottom={5}>
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div
                style={{
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Logo src={resource.logoSrc} alt={`${resource.name} logo`} />
              </div>
              <Box sx={{ flexGrow: 1, overflow: 'hidden', padding: '16px' }}>
                <Typography gutterBottom variant='h6'>
                  {resource.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ mb: 2 }}
                >
                  {resource.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center', // Centers the links horizontally
                  padding: '16px',
                  paddingTop: 2,
                  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                }}
              >
                {resource.websiteUrl && (
                  <Link
                    href={resource.websiteUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    sx={{ marginRight: 2 }}
                  >
                    Website
                  </Link>
                )}
                {resource.discordUrl && (
                  <Link
                    href={resource.discordUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    sx={{ marginRight: 2 }}
                  >
                    Discord
                  </Link>
                )}
                {resource.slackUrl && (
                  <Link
                    href={resource.slackUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Slack
                  </Link>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ResourceCategories;
