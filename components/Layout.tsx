import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Header from './Header';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    height: '100vh',
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      paddingTop: theme.spacing(4),
    },
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid container component="main" className={classes.root}>
        {children}
      </Grid>
    </>
  );
}
