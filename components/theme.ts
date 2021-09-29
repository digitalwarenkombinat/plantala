import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { mediaData } from '../public/mediaData';

const primaryColor = mediaData.colors.primaryColor || '#799160';
const secondaryColor = mediaData.colors.secondaryColor || '#faebd7';
const backgroundColor = mediaData.colors.backgroundColor || '#e0bf96';
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
  fontDisplay: 'swap',
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
      flexGrow: 1,
    },
    h3: {
      fontFamily: 'Magilio, Arial',
    },
    h6: {
      textAlign: 'center',
    },
    button: {
      text: textColor,
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
    MuiGrid: {
      root: {
        '@media (prefers-reduced-motion: reduce)': {
          '& *': {
            animationDuration: '0.001ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.001ms !important',
          },
        },
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: infoColor,
      },
      root: {
        textTransform: 'none',
        fontSize: '1rem',
      },
    },
    MuiAvatar: {
      root: {
        cursor: 'pointer',
        borderWidth: 2,
        borderStyle: 'solid',
        margin: 0,
        padding: 4,
        height: '4rem',
        width: '4rem',
        borderColor: infoColor,
        [theme.breakpoints.up('sm')]: {
          height: '5em',
          width: '5em',
        },
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'none',
      },
    },
    MuiLink: {
      root: {
        fontWeight: 'bold',
      },
    },
    MuiFab: {
      extended: {
        color: theme.palette.text.primary,
        position: 'fixed',
        bottom: theme.spacing(2),
        left: '50%',
        transform: 'translateX(-50%)',
        width: '75%',
        [theme.breakpoints.up('sm')]: {
          width: '50%',
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: 0,
      },
    },
    MuiSvgIcon: {
      root: {
        marginRight: 8,
      },
    },
    MuiDialog: {
      paperScrollPaper: {
        alignItems: 'center',
      },
    },
    MuiDialogTitle: {
      root: {
        padding: '1rem',
      },
    },
    MuiDialogContent: {
      root: {
        overflowY: 'visible',
        padding: '1rem',
      },
    },
    MuiSlider: {
      root: {
        padding: theme.spacing(2, 0),
        [theme.breakpoints.up('md')]: {
          minWidth: '25vw',
          padding: theme.spacing(5, 0),
        },
      },
      valueLabel: {
        fontSize: '1.25rem',
      },
    },
    MuiToolbar: {
      root: {
        '& a': {
          height: '60px',
        },
        '& > *': {
          margin: theme.spacing(0.5, 2, 0, 1),
        },
        '@media print': {
          '& > *': {
            margin: theme.spacing(1.5, 4),
          },
        },
      },
    },
    MuiImageListItemBar: {
      title: {
        whiteSpace: 'normal',
      },
      titleWrap: {
        flex: '1 1 auto',
        marginRight: theme.spacing(0.5),
      },
      actionIconActionPosLeft: {
        flex: '0 0 auto',
        paddingLeft: theme.spacing(0.5),
      },
    },
  },
};

export default theme;
