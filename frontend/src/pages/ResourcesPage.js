import React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  Divider,
} from "@mui/material";

const ResourcesPage = () => {
  return (
    <Container>
      <Box py={5}>
        <Typography variant="h3" textAlign="center" marginBottom={5}>
          CS Resources
        </Typography>

        {/* CS Organizations */}
        <Box marginBottom={5}>
          <Typography variant="h4" gutterBottom>
            CS Organizations
          </Typography>
          <Typography>
            Description or brief about CS organizations and their significance.
            Include information on why they matter, their impact, and so on.
          </Typography>
        </Box>
        <Divider />

        {/* CS Github Repos */}
        <Box py={5}>
          <Typography variant="h4" gutterBottom>
            CS Github Repositories
          </Typography>
          <List>
            <ListItem>
              <Link href="https://github.com/exampleRepo1">Example Repo 1</Link>
              <Typography>: Short description about this repo.</Typography>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/exampleRepo2">Example Repo 2</Link>
              <Typography>: Short description about this repo.</Typography>
            </ListItem>
            {/* Add more repos as necessary */}
          </List>
        </Box>
        <Divider />

        {/* Job Resources */}
        <Box py={5}>
          <Typography variant="h4" gutterBottom>
            Resources for Job Hunting
          </Typography>
          <Typography>
            Introduction or tips about how to effectively find a job, the
            significance of networking, and leveraging alumni connections.
          </Typography>
          {/* Additional resources, links, guides can be added here */}
        </Box>
        <Divider />

        {/* Cover Letter & Resume */}
        <Box py={5}>
          <Typography variant="h4" gutterBottom>
            Cover Letter & Resume Information
          </Typography>
          <Typography>
            Here, add tips, templates, and best practices for crafting an
            effective cover letter and resume. Discuss the importance of
            tailoring these documents for specific roles and the impact of a
            well-crafted application.
          </Typography>
          {/* Add links to templates or further readings */}
        </Box>
      </Box>
    </Container>
  );
};

export default ResourcesPage;
