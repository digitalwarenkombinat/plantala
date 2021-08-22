import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    height: '25vh',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      height: 'initial',
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingRight: 0,
    },
  },
}));

const main = {
  title: 'Malen! Strahlen! Plantala!',
  description: 'Erstelle individuelle Mandalas aus historischen Pflanzendarstellungen.',
};

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <Grid item>
        <Typography variant="h3" gutterBottom>
          {main.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" paragraph>
          {main.description}
        </Typography>
      </Grid>
    </Grid>
  );
}
