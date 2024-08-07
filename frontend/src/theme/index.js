import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { THEMES } from "../constants";
import { common } from "@mui/material/colors";
import typography from "./typography";
import { softShadows, strongShadows } from "./shadows";

const baseOptions = {
  direction: "ltr",
  typography: {
    fontFamily: '"Anek Gujarati", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 35,
          textTransform: "lowercase",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backdropFilter: "blur(10px)",
          display: "flex", // Using flexbox for the navbar layout
        },
      },
    },
  },
};

const themesOptions = [
  {
    name: THEMES.LIGHT,
    palette: {
      type: "light",
      action: {
        active: "#000000",
      },
      background: {
        default: "#000000",
        dark: "#000000",
        // paper: common.white,
      },
      primary: {
        main: "#003F87", // We use this one for theme, the other ones not I think
        dark: "#333333",
      },
      secondary: {
        main: "#000000",
        dark: "#000000",
      },
      text: {
        primary: "#000000",
        secondary: "rgb(0, 0, 0, 77%)",
      },
    },
    shadows: softShadows,
  },
  {
    name: THEMES.ONE_DARK,
    palette: {
      type: "dark",
      action: {
        active: "rgba(255, 255, 255, 0.54)",
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        focus: "rgba(255, 255, 255, 0.12)",
      },
      background: {
        default: "#282C34",
        dark: "#1c2025",
        paper: "#282C34",
      },
      primary: {
        main: "#8a85ff",
      },
      secondary: {
        main: "#8a85ff",
      },
      text: {
        primary: "#ffffff",
        secondary: "#ffffff",
      },
    },
    shadows: strongShadows,
  },
];

export const createWebTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createTheme(
    { ...baseOptions, ...themeOptions },
    {
      direction: config.direction,
    }
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
