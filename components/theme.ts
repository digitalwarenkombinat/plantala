import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { mediaData } from '../public/mediaData';

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
  },
  typography: {
    button: {
      text: textColor,
    },
    body1: {
      fontSize: '2rem',
    },
  },
});

theme = responsiveFontSizes(theme);

theme = {
  ...theme,
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: infoColor,
      },
    },
    MuiAvatar: {
      root: {
        cursor: 'pointer',
        borderWidth: 2,
        borderStyle: 'solid',
        margin: 2,
        height: '2.5rem',
        width: '2.5rem',
        borderColor: infoColor,
        [theme.breakpoints.up('sm')]: {
          height: '3em',
          width: '3em',
        },
      },
    },
    MuiFab: {
      primary: {
        color: theme.palette.text.primary,
        position: 'absolute',
        bottom: 16,
        right: 16,
      },
    },
    MuiSvgIcon: {
      root: {
        marginRight: 8,
      },
    },
  },
};

export default theme;
