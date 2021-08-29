import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ColorSwitch from './ColorSwitch';
import ShareButtons from './ShareButtons';

const useStyles = makeStyles((theme: Theme) => ({
  shareImage: {
    padding: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
  },
}));

const description = 'Teile dein persönliches Plantala oder drucke es aus!';

const ShareBanner = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.shareImage}>
      <Typography variant="h4" component="h3" paragraph>
        {description}
      </Typography>
      <ColorSwitch />
      <ShareButtons />
    </Grid>
  );
};

export default ShareBanner;
