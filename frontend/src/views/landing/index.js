import React, { useEffect } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import styled from "@emotion/styled";
import { NavButton } from "components/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

// Assuming these imports are correct and used elsewhere
import profileCardIcon from "../../static/profilecards_layout.jpeg";
import networkingIcon from "../../static/networkingicon_layout.png";
import resourcesIcon from "../../static/educationicon_layout.png";
import wwuBackground from "../../static/wwu.webp";
import DiscordIcon from "../../static/discord.png"; // Assuming you have this logo
import wwuBG from "../../static/wwuBG.png";
import CustomCoreIcon from "components/CustomCoreIcon";

const HeroImage = styled(Box)(({ theme }) => ({
  height: "500px",
  backgroundImage: "url(./stock_photo.jpeg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  color: "#333333",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const FeatureIcon = styled(Box)`
  height: 100px;
  width: 100px;
  margin: 20px auto;
  background-size: contain;
  background-repeat: no-repeat;
`;

const LandingView = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `linear-gradient(rgba(19, 129, 255, 0.15), rgba(19, 129, 255, 0.15)), url(${wwuBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src="/Vector 6.png"
          style={{
            position: "absolute",
            top: 90,
            left: 0,
            bottom: 0,
            margin: "auto",
          }}
        />
        <img
          src="/Vector 4.png"
          style={{
            position: "absolute",
            top: 300,
            left: 0,
            bottom: 0,
            margin: "auto",
          }}
        />
        <img
          src="/Vector 5.png"
          style={{
            position: "absolute",
            top: 220,
            left: -50,
            bottom: 0,
            margin: "auto",
          }}
        />
        <Stack sx={{ position: "absolute", left: 200 }} spacing={2}>
          <Stack direction="row">
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "Inconsolata",
                fontSize: "5.5rem",
                lineHeight: "normal",
              }}
            >
              {`>`}
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Inconsolata",
                    fontSize: "5.5rem",
                    lineHeight: "normal",
                  }}
                >
                  WhatcomCoders
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    lineHeight: "normal",
                    fontSize: "2rem",
                  }}
                >
                  wwu's network for success in tech
                </Typography>
              </Box>
              <NavButton
                sx={{
                  color: "white",
                  width: "45%",
                  justifyContent: "space-between",
                  fontSize: "1rem",
                  px: 3,
                  py: 2.5,
                  borderRadius: 5,
                }}
                text="join our discord"
                url="/https://discord.gg/r6ShrR73Jx"
                icon={<FontAwesomeIcon icon={faDiscord} />}
              />
              <NavButton
                sx={{
                  color: "white",
                  width: "45%",
                  justifyContent: "space-between",
                  fontSize: "1rem",
                  px: 3,
                  py: 2.5,
                  borderRadius: 5,
                }}
                text="connect with us"
                url="/people"
                icon={<FontAwesomeIcon icon={faUser} />}
              />
              <NavButton
                sx={{
                  color: "white",
                  width: "45%",
                  justifyContent: "space-between",
                  fontSize: "1rem",
                  px: 3,
                  py: 2.5,
                  borderRadius: 5,
                }}
                text="explore resources"
                url="/resources"
                icon={<FontAwesomeIcon icon={faCompass} />}
              />
              <NavButton
                sx={{
                  color: "white",
                  width: "45%",
                  justifyContent: "space-between",
                  fontSize: "1rem",
                  px: 3,
                  py: 2.5,
                  borderRadius: 5,
                }}
                text="learn more"
                url=""
                icon={<FontAwesomeIcon icon={faAngleDown} />}
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {/* Features Section */}
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scrollSnapAlign: "start",
          textAlign: "center",
          py: 5,
        }}
      >
        <Box py={5} textAlign="center">
          <Typography variant="h4" marginBottom={5}>
            Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4} textAlign="center">
              <FeatureIcon
                style={{ backgroundImage: `url(${profileCardIcon})` }}
              />
              <Typography variant="h6">Profile Cards</Typography>
              <Typography>
                Learn about fellow alumni, set up meetings, and discover shared
                interests.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
              <FeatureIcon
                style={{ backgroundImage: `url(${networkingIcon})` }}
              />
              <Typography variant="h6">Direct Connect</Typography>
              <Typography>
                Set up meetings through Calendly, and connect in real-time.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
              <FeatureIcon
                style={{ backgroundImage: `url(${resourcesIcon})` }}
              />
              <Typography variant="h6">Resources</Typography>
              <Typography>
                Access curated CS resources tailored for our alumni community.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default LandingView;
