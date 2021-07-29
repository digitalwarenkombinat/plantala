import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme: Theme) => ({
  main: {
    boxShadow: 'none',
    height: '25em',
    [theme.breakpoints.up('sm')]: {
      height: '29em',
    },
    [theme.breakpoints.up('md')]: {
      height: '32em',
    },
  },
  mainImage: {
    backgroundColor: theme.palette.background.default,
    backgroundImage: `url('/images/main.png')`,
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
    <Paper className={classes.main}>
      <div className={classes.mainImage} />
    </Paper>
  );
}
