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
    height: '50%',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
  },
}));

export default function Main() {
  const classes = useStyles();

  return <Grid item xs={12} md={6} className={classes.image} />;
}
