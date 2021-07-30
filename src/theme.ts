import { blue } from '@material-ui/core/colors';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { mediaData } from '../public/mediaData' ;

declare module '@material-ui/core/styles/createPalette' {
  export interface PaletteOptions {
    plantala: {
      main: string;
    };
  }
}

const primaryColor = mediaData.colors.primaryColor || '#799160';
const secondaryColor = mediaData.colors.secondaryColor || '#e0bf96';
const backgroundColor = mediaData.colors.backgroundColor || '#faebd7';
const textColor = mediaData.colors.textColor || '#341419';
const errorColor = mediaData.colors.errorColor || '#f3aa1e';
const infoColor = mediaData.colors.infoColor || '#ab465a';
const successColor = mediaData.colors.successColor || '#f3aa1e';

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: backgroundColor,
      paper: '#e0bf96',
    },
    text: {
      primary: textColor,
    },
    error: {
      main: errorColor,
    },
    info: {
      main: infoColor,
    },
    success: {
      main: successColor,
    },
    plantala: {
      main: '#e0bf96',
    },
  },
  typography: {
    button: {
      text: blue,
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: infoColor,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
