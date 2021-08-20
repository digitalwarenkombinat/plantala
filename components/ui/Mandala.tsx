import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useStore from '../store';
import { useCanvas } from '../utils/useCanvas';
import Share from './Share';

const useStyles = makeStyles(() => ({
  canvas: {
    width: '100%',
    height: '100%',
  },
}));

const Mandala = () => {
  const classes = useStyles();
  const { canvasRef, canvasWidth, canvasHeight } = useCanvas();
  const { imageMultiplier } = useStore();

  return (
    <Grid container justifyContent="center">
      <canvas
        ref={canvasRef}
        className={classes.canvas}
        width={canvasWidth * imageMultiplier}
        height={canvasHeight * imageMultiplier}
      />
      <Share canvasRef={canvasRef} />
    </Grid>
  );
};

export default Mandala;
