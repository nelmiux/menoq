import { amber, deepPurple, green, lightBlue, pink, red, teal } from '@mui/material/colors';
import { Palette, Shadows, ThemeOptions, createTheme, responsiveFontSizes } from '@mui/material/styles';

import {
  CustomColors,
  GrayScale,
  MuiColors,
  alto,
  black,
  bostonBlue,
  carrotOrange,
  cornHarvest,
  endeavour,
  fountainBlue,
  gambodge,
  morningGlory,
  nevada,
  paleSky,
  plum,
  tamarillo,
  white,
} from './utilities/colors';

declare module '@mui/material/styles' {
  interface Palette extends MuiColors, CustomColors, GrayScale {}

  interface PaletteOptions extends MuiColors, CustomColors, GrayScale {}

  interface TypographyVariants {
    title: React.CSSProperties;
    body3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    body3: true;
  }
}

// A custom theme for this app
let customTheme = createTheme({
  palette: {
    primary: {
      light: '#F95CDD',
      main: '#742389',
      dark: '#5C2751',
    },
    secondary: {
      light: '#FFFFFF',
      main: '#EFEAED',
      dark: '#DFD4DD',
    },
    nevada,
    paleSky,
    endeavour,
    bostonBlue,
    morningGlory,
    fountainBlue,
    cornHarvest,
    tamarillo,
    carrotOrange,
    gambodge,
    plum,
    white,
    black,
    alto,
    lightBlue,
    amber,
    green,
    teal,
    deepPurple,
    pink,
    red,
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [
          {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            src: 'url("./assets/fonts/roboto/roboto-v30-latin-regular.woff2")',
          },
        ],
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(92, 39, 81, 0.1)',
          '& fieldset': {
            border: 'none',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.primary.light,
          height: '40px',
          textTransform: 'none',
          fontWeight: 700,
          '&:hover': {
            backgroundColor: theme.palette.white,
            border: `2px solid ${theme.palette.primary.light}`,
            color: theme.palette.primary.light,
          },
        }),
      },
    },
  },
  typography: ({ success }) => ({
    allVariants: {
      fontWeight: 200,
    },
    button: {
      color: '#F5F5F5',
      fontSize: 16,
      fontWeight: '700',
      wordWrap: 'break-word',
    },
    h1: {
      fontSize: 40,
      fontWeight: 600,
      color: success.main,
      letterSpacing: 4,
    },
    h2: {
      fontSize: 32,
      letterSpacing: 0.7,
    },
    h3: {
      fontSize: 28,
      letterSpacing: 0.7,
    },
    h4: {
      color: '#2D2D36',
      fontSize: 20,
      fontWeight: '600',
      wordWrap: 'break-word',
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
    body2: {
      color: '#2D2D36',
      fontSize: 14,
      fontWeight: 500,
      wordWrap: 'break-word',
    },
    body3: {
      // Password
      color: ({ palette }: { palette: Palette }) => palette.plum[300],
      fontSize: 12,
      fontWeight: 500,
      wordWrap: 'break-word',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    title: {
      fontSize: 48,
      fontWeight: 600,
    },
  }),
} as ThemeOptions);

customTheme.shadows = Array(customTheme.shadows.length).fill('none') as Shadows;
customTheme = responsiveFontSizes(customTheme);

export default customTheme;
