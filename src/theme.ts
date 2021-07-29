import { blue } from '@material-ui/core/colors';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  export interface PaletteOptions {
    plantala: {
      main: string;
    };
  }
}

const primaryColor = '#799160';
const secondaryColor = '#e0bf96';
const backgroundColor = '#faebd7';
const textColor = '#341419';
const errorColor = '#f3aa1e';
const infoColor = '#ab465a';
const successColor = '#f3aa1e';

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
      main: infoColor,
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
