import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';

import useStore from '../store';

const mediaPath = useStore.getState().mediaPath;

const useStyles = makeStyles((theme: Theme) => ({
  start: {
    boxShadow: 'none',
  },
  startImage: {
    backgroundColor: theme.palette.secondary.main,
    backgroundImage: `url('/images/${mediaPath}start.webp')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    height: 0,
    paddingBottom: '100%',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '33%',
    },
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Paper className={classes.start}>
      <div className={classes.startImage} />
    </Paper>
  );
}
