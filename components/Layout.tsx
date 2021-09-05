import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Header from './Header';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    '@media print': {
      backgroundColor: 'transparent',
    },
  },
  main: {
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
    },
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Grid container component="main" className={classes.main}>
        {children}
      </Grid>
    </div>
  );
}
