import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useCanvas } from '../utils/useCanvas';

const useStyles = makeStyles(() => ({
  mandala: {
    width: '100%',
    height: '100%',
    maxWidth: '800px',
  },
}));

const Mandala = () => {
  const classes = useStyles();
  const { canvasRef } = useCanvas();

  return (
    <Grid container justifyContent="center" item xs={12}>
      <canvas ref={canvasRef} className={classes.mandala} id="plantalaCanvas" width="800" height="800" />
    </Grid>
  );
};

export default Mandala;
