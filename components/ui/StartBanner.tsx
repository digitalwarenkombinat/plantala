import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
  mainContent: {
    position: 'relative',
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingRight: 0,
    },
  },
}));

const main = {
  title: 'Malen! Strahlen! Plantala!',
  description: 'Erstelle individuelle Mandalas aus historischen botanischen Lehrtafeln.',
};

export default function Header() {
  const classes = useStyles();

  return (
    <Paper square className={classes.main} >
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainContent}>
            <Typography variant="h4" gutterBottom>
              {main.title}
            </Typography>
            <Typography variant="h5" paragraph>
              {main.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
