import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { mediaData } from '../public/mediaData';

const primaryColor = mediaData.colors.primaryColor || '#799160';
const secondaryColor = mediaData.colors.secondaryColor || '#e0bf96';
const backgroundColor = mediaData.colors.backgroundColor || '#faebd7';
const textColor = mediaData.colors.textColor || '#341419';
const errorColor = mediaData.colors.errorColor || '#f3aa1e';
const infoColor = mediaData.colors.infoColor || '#ab465a';
const successColor = mediaData.colors.successColor || '#f3aa1e';

const magilio = {
  fontFamily: 'Magilio',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local('Magilio'),
    url('${process.env.pathPrefix}/fonts/Magilio.otf') format('opentype')
  `,
};

const ginoraSans = {
  fontFamily: 'GinoraSans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local('GinoraSans'),
    url('${process.env.pathPrefix}/fonts/GinoraSans.otf') format('opentype')
  `,
};

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
    fontFamily: 'GinoraSans, Arial',
    h2: {
      fontFamily: 'Magilio, Arial',
      marginTop: '0.5rem',
    },
    h3: {
      fontFamily: 'Magilio, Arial',
    },
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
    MuiCssBaseline: {
      '@global': {
        '@font-face': [magilio, ginoraSans],
      },
    },
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
        margin: 4,
        padding: 2,
        height: '3rem',
        width: '3rem',
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
    MuiDialogContent: {
      root: {
        overflowY: 'visible',
      },
    },
    MuiImageListItem: {
      item: {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '5%',
      },
    },
    MuiToolbar: {
      root: {
        '& > *': {
          marginRight: theme.spacing(2),
        },
      },
    },
  },
};

export default theme;
