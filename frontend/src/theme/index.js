import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { THEMES } from '../constants';
import { common } from '@mui/material/colors';
import typography from './typography';
import { softShadows, strongShadows } from './shadows';

const baseOptions = createTheme({
  direction: 'ltr',
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: 'white',
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: '#3949ab',
      },
    },
  },
});

const themesOptions = [
  {
    name: THEMES.LIGHT,
    palette: {
      type: 'light',
      action: {
        active: '#ff9966',
      },
      background: {
        default: common.white,
        dark: '#f4f6f8',
        paper: common.white,
      },
      primary: {
        main: '#333333',
        dark: '#333333',
      },
      secondary: {
        main: '#5C6BC0',
        dark: '#5C6BC0',
      },
      text: {
        primary: '#ffffff',
        secondary: '#ffffff',
      },
    },
    shadows: softShadows,
  },
  {
    name: THEMES.ONE_DARK,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
      },
      background: {
        default: '#282C34',
        dark: '#1c2025',
        paper: '#282C34',
      },
      primary: {
        main: '#8a85ff',
      },
      secondary: {
        main: '#8a85ff',
      },
      text: {
        primary: '#ffffff',
        secondary: '#ffffff',
      },
    },
    shadows: strongShadows,
  },
  {
    name: THEMES.UNICORN,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
      },
      background: {
        default: '#2a2d3d',
        dark: '#222431',
        paper: '#2a2d3d',
      },
      primary: {
        main: '#a67dff',
      },
      secondary: {
        main: '#a67dff',
      },
      text: {
        primary: '#ffffff',
        secondary: '#ffffff',
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

  let theme = createTheme(baseOptions, themeOptions, {
    direction: config.direction,
  });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
