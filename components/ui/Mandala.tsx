import {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCanvas } from './useCanvas';
import useStore from "../store";
import Share from './Share';

const useStyles = makeStyles(() => ({
  canvas: {
    width: '100%',
    height: '100%'
  }
}));

const Mandala = () => {
  const classes = useStyles();
  const { setPlants, canvasRef, canvasWidth, canvasHeight } = useCanvas();
  const imageMultiplier = 5;
  const { getSelectedMedia } = useStore();

  useEffect(() => {
    setPlants(getSelectedMedia());
  }, [getSelectedMedia, setPlants]);

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
