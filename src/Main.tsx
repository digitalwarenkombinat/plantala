import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { mediaData } from '../public/mediaData' ;

const hasMediaData = mediaData.images.length > 1;
const mediaItemPath = hasMediaData ? '' : 'plants/';

const useStyles = makeStyles((theme: Theme) => ({
  start: {
    boxShadow: 'none',
    height: '25em',
    [theme.breakpoints.up('sm')]: {
      height: '29em',
    },
    [theme.breakpoints.up('md')]: {
      height: '32em',
    },
  },
  startImage: {
    backgroundColor: theme.palette.background.default,
    backgroundImage: `url('/images/${mediaItemPath}start.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    height: '100%',
    width: '100%',
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
