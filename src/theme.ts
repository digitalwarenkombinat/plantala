import { blue } from '@material-ui/core/colors';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { mediaData } from '../public/mediaData' ;

interface IMediaDataImages {
  name: string
  source: string
  description: string
  link: string
  wiki: string
}

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    mediaDataImages: IMediaDataImages[]
    mediaDataPath: string
  }
  interface ThemeOptions {
    mediaDataImages?: IMediaDataImages[]
    mediaDataPath?: string
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
  mediaDataImages: mediaData.images,
  mediaDataPath: mediaData.isMaaS ? '' : 'plants/',
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: {
      main: secondaryColor
    },
    background: {
      default: backgroundColor
    },
    text: {
      primary: textColor
    },
    error: {
      main: errorColor
    },
    info: {
      main: infoColor
    },
    success: {
      main: successColor
    }
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
