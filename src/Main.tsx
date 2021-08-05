import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PlantList from './ui/PlantList';

const useStyles = makeStyles((theme: Theme) => ({
  start: {
    boxShadow: 'none',
    height: '25em',
  },
  startImage: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url('/images/${theme.mediaDataPath}start.png')`,
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
      <PlantList />
    </Paper>
  );
}
