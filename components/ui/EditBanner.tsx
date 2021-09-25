import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import useStore from '../store';
import ColorSwitch from './ColorSwitch';

const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    padding: theme.spacing(4, 2, 0),
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 2, 0),
    },
  },
}));

const main = {
  description: 'Wähle zum Bearbeiten eine Pflanze aus!',
  fallback: 'Gehe zurück und wähle Pflanzenteile aus!',
};

export default function Header() {
  const classes = useStyles();
  const { isMaaS, getSelectedElements } = useStore();

  return (
    <Grid item xs={12} className={classes.banner}>
      <Typography variant="h4" component="h2" paragraph>
        {getSelectedElements().length > 0 ? main.description : main.fallback}
      </Typography>
      {!isMaaS && <ColorSwitch />}
    </Grid>
  );
}
