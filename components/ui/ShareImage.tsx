import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import useStore from '../store';
import { useCanvas } from '../utils/useCanvas';
import ColorSwitch from './ColorSwitch';
import ShareButtons from './ShareButtons';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
  },
  canvas: {
    maxWidth: '95vw',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      maxWidth: '50vw',
    },
  },
}));

const description = 'Teile dein persönliches Plantala oder drucke es aus!';

const ShareImage = () => {
  const classes = useStyles();
  const { canvasRef, canvasWidth, canvasHeight } = useCanvas();
  const { imageMultiplier } = useStore();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} className={classes.main}>
        <Typography variant="h4" paragraph>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} container justifyContent="center" className={classes.main}>
        <ColorSwitch />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.main}>
        <ShareButtons />
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <canvas
          ref={canvasRef}
          className={classes.canvas}
          width={canvasWidth * imageMultiplier}
          height={canvasHeight * imageMultiplier}
        />
      </Grid>
    </Grid>
  );
};

export default ShareImage;
