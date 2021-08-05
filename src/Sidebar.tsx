/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const main = {
  title: 'Malen! ',
  description: 'Mandalas als ästhetischer und spielerischer Einstieg in die Pflanzenkunde',
};

const avatarCount = 5;

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
  },
  mainContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  plantAvatar: {
    borderColor: theme.palette.info.main,
    borderWidth: 2,
    borderStyle: 'solid',
    margin: '0.5rem',
    height: '3rem',
    width: '3rem',
    [theme.breakpoints.up('sm')]: {
      height: '4em',
      width: '4em',
    },
  },
  mainButton: {
    color: '#fff',
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Paper className={classes.main}>
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainContent}>
            <Typography variant="h3" gutterBottom>
              {main.title}
            </Typography>
            <Typography variant="h5" paragraph>
              {main.description}
            </Typography>
            <Button variant="contained" size="large" className={classes.mainButton}>
              Start
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="column">
        {theme.mediaDataImages.slice(0, avatarCount).map((plant) => (
          <Grid key={plant.name} item container alignItems="center">
            <Avatar
              key={plant.name}
              alt={plant.name}
              src={`/images/${theme.mediaDataPath}${plant.source}`}
              className={classes.plantAvatar}
            />
            <Typography variant="h6" gutterBottom>
              {plant.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
