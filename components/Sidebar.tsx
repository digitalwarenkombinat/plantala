import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Paper className={classes.main}></Paper>
  );
}
