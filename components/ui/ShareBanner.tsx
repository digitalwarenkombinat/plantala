import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import useStore from '../store';
import ColorSwitch from './ColorSwitch';
import ShareButtons from './ShareButtons';

const useStyles = makeStyles((theme: Theme) => ({
  shareImage: {
    padding: theme.spacing(4, 2),
    textAlign: 'center',
  },
}));

const description = 'Speichere und drucke dein persönliches Plantala!';

const ShareBanner = () => {
  const classes = useStyles();
  const { isMaaS } = useStore();

  return (
    <Grid item xs={12} className={classes.shareImage}>
      <Typography variant="h4" component="h3" paragraph>
        {description}
      </Typography>
      {!isMaaS && <ColorSwitch />}
      <ShareButtons />
    </Grid>
  );
};

export default ShareBanner;
