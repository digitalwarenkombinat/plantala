import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ColorSwitch from './ColorSwitch';

const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    padding: theme.spacing(4, 0),
    textAlign: 'center',
  },
}));

const main = {
  description: 'Wähle zum Bearbeiten eine Pflanze aus!',
};

export default function Header() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.banner}>
      <Typography variant="h4" component="h3" paragraph>
        {main.description}
      </Typography>
      <ColorSwitch />
    </Grid>
  );
}
