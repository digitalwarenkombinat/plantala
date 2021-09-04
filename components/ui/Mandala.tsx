import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { useCanvas } from '../utils/useCanvas';

const useStyles = makeStyles((theme: Theme) => ({
  mandala: {
    width: '100%',
    height: '100%',
    maxWidth: '350px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '600px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '700px',
    },
    '@media print': {
      maxWidth: '100vw',
    },
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
