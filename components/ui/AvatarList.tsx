import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, Theme } from '@material-ui/core/styles';

import useStore from "../store";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
  plantAvatar: {
    borderColor: theme.palette.info.main,
    borderWidth: 2,
    borderStyle: 'solid',
    margin: 2,
    height: '2.5rem',
    width: '2.5rem',
    [theme.breakpoints.up('sm')]: {
      height: '4em',
      width: '4em',
    },
  },
}));

export default function AvatarList() {
  const classes = useStyles();
  const { avatarCount, getSelectedMedia, mediaPath } = useStore();
  const numberOfEmptyItems = avatarCount - getSelectedMedia().length;
  
  return (
    <Paper square className={classes.main} >
      <Grid container direction="column">
        {getSelectedMedia().map((plant) => (
          <Grid key={plant.name} item container alignItems="center">
            <Avatar
              key={plant.name}
              alt={plant.name}
              src={`/images/${mediaPath}${plant.source}`}
              className={classes.plantAvatar}
              />
            <Typography variant="h6" gutterBottom>
              {plant.name}
            </Typography>
          </Grid>
        ))}
        {[...Array(numberOfEmptyItems).keys()].map((index) => (
        <Grid key={index} item container alignItems="center">
          <Avatar src={`/images/${mediaPath}logo.png`} className={classes.plantAvatar}/>
          <Typography variant="h6" gutterBottom>Wähle deine nächste Pflanze ...</Typography>
        </Grid>))}
      </Grid>
    </Paper>
  );
}
