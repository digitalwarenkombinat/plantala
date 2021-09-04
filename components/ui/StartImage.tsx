import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

import useStore from '../store';

const mediaPath = useStore.getState().mediaPath;

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    backgroundImage: `url('${process.env.pathPrefix}/images/${mediaPath}start.webp')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '50vh',
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    },
    animation: '$app-landing-spin infinite 30s linear',
  },
  '@keyframes app-landing-spin': {
    '0%': {
      transform: 'rotate(360deg)',
    },
    '100%': {
      transform: 'rotate(0deg)',
    },
  },
}));

export default function Main() {
  const classes = useStyles();

  return <Grid item xs={12} md={6} className={classes.image} />;
}
