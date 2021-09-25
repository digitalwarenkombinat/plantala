import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

import useStore, { ELEMENT_SUFFIX } from '../store';

const mediaPath = useStore.getState().mediaPath;
const useStyles = makeStyles((theme: Theme) => ({
  image: {
    backgroundImage: `url('${process.env.pathPrefix}/images/${mediaPath}start${ELEMENT_SUFFIX}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '50vh',
    [theme.breakpoints.up('md')]: {
      height: '60vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '85vh',
    },
  },
}));

export default function Main() {
  const classes = useStyles();

  return <Grid item xs={12} md={6} className={classes.image} />;
}
