import React from 'react';
import { Box, Grid, Typography, Link, ListItem } from '@mui/material';
import styled from '@emotion/styled';

const Logo = styled('img')`
  width: 80px;
  height: 50px;
  object-fit: contain;
`;

const ResourceItem = ({
  name,
  description,
  logoSrc,
  websiteUrl,
  discordUrl,
  slackUrl,
}) => {
  return (
    <ListItem sx={{ marginBottom: 2, alignItems: 'flex-start' }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Logo src={logoSrc} alt={`${name} logo`} />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h6' gutterBottom>
            {name}
          </Typography>
          <Typography variant='body2'>{description}</Typography>
          <Box mt={1}>
            {websiteUrl && (
              <Link
                href={websiteUrl}
                target='_blank'
                rel='noopener noreferrer'
                sx={{ marginRight: 2 }}
              >
                Website
              </Link>
            )}
            {discordUrl && (
              <Link
                href={discordUrl}
                target='_blank'
                rel='noopener noreferrer'
                sx={{ marginRight: 2 }}
              >
                Discord
              </Link>
            )}
            {slackUrl && <Link href={slackUrl}>Slack</Link>}
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ResourceItem;
