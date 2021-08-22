import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useCanvas } from '../utils/useCanvas';

const useStyles = makeStyles(() => ({
  canvas: {
    width: '50vh',
  },
}));

const Mandala = () => {
  const classes = useStyles();
  const { canvasRef, canvasWidth, canvasHeight } = useCanvas();

  return (
    <Grid container justifyContent="center">
      <canvas ref={canvasRef} className={classes.canvas} width={canvasWidth} height={canvasHeight} />
    </Grid>
  );
};

export default Mandala;
