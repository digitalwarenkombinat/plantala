import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import useStore from '../store';
import { useCanvas } from '../utils/useCanvas';
import ColorSwitch from './ColorSwitch';
import ShareButtons from './ShareButtons';

const useStyles = makeStyles(() => ({
  canvas: {
    width: '50vh',
  },
}));

const description = 'Teile dein persönliches Plantala oder drucke es aus!';

const ShareImage = () => {
  const classes = useStyles();
  const { canvasRef, canvasWidth, canvasHeight } = useCanvas();
  const { imageMultiplier } = useStore();

  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4" paragraph>
          {description}
        </Typography>
      </Grid>
      <Grid container xs={12} justifyContent="center">
        <ColorSwitch />
      </Grid>
      <Grid container xs={12} justifyContent="center">
        <canvas
          ref={canvasRef}
          className={classes.canvas}
          width={canvasWidth * imageMultiplier}
          height={canvasHeight * imageMultiplier}
        />
      </Grid>
      <Grid item xs={12}>
        <ShareButtons />
      </Grid>
    </Grid>
  );
};

export default ShareImage;
