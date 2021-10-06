import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import dynamic from 'next/dynamic';

import useStore from '../store';
const DynamicColorSwitch = dynamic(() => import('./ColorSwitch'), { ssr: false });

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
  description: 'Wähle zum Bearbeiten ein Element aus!',
  fallback: 'Gehe zurück und wähle Elemente aus!',
};

export default function Header() {
  const classes = useStyles();
  const { isMaaS, getSelectedElements } = useStore();

  return (
    <Grid item xs={12} className={classes.banner}>
      <Typography variant="h4" component="h2" paragraph>
        {getSelectedElements().length > 0 ? main.description : main.fallback}
      </Typography>
      {!isMaaS && <DynamicColorSwitch />}
    </Grid>
  );
}
