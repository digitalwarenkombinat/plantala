import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { useCanvas } from '../utils/useCanvas';

const useStyles = makeStyles((theme: Theme) => ({
  canvas: {
    maxWidth: '95vw',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      maxWidth: '50vw',
    },
  },
}));

const Mandala = () => {
  const classes = useStyles();
  const { canvasRef, canvasWidth, canvasHeight } = useCanvas();

  return (
    <Grid container justifyContent="center">
      <canvas
        ref={canvasRef}
        id="plantalaCanvas"
        className={classes.canvas}
        width={canvasWidth}
        height={canvasHeight}
      />
    </Grid>
  );
};

export default Mandala;
