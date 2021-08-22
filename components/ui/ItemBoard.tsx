import { Avatar, Grid, Slider, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import useStore, { ELEMENT_SUFFIX } from '../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemBoard: {
      padding: theme.spacing(4),
      backgroundColor: theme.palette.secondary.main,
    },
  }),
);

export default function ItemBoard() {
  const classes = useStyles();
  const { getActiveElement, mediaPath } = useStore();
  const transformElement = useStore((state) => state.transformElement);

  return (
    <Grid container direction="column" className={classes.itemBoard} role="presentation">
      <Grid container justifyContent="center">
        <Avatar
          key={getActiveElement().name}
          alt={getActiveElement().name}
          src={`/images/${mediaPath}${getActiveElement().source}${ELEMENT_SUFFIX}`}
        />
      </Grid>
      <Grid item>
        <Typography id="rotation-slider" gutterBottom>
          Rotation
        </Typography>
        <Slider
          aria-labelledby="rotation-slider"
          valueLabelDisplay="on"
          max={360}
          value={getActiveElement().rotation || 0}
          onChange={(_event, value) => transformElement('rotation', value)}
        />
        <Typography id="rotation-slider" gutterBottom>
          Menge
        </Typography>
        <Slider
          aria-labelledby="amount-slider"
          valueLabelDisplay="on"
          step={2}
          marks
          min={4}
          max={20}
          value={getActiveElement().amount || 8}
          onChange={(_event, value) => transformElement('amount', value)}
        />
        <Typography id="rotation-slider" gutterBottom>
          Größe
        </Typography>
        <Slider
          aria-labelledby="scale-slider"
          valueLabelDisplay="on"
          step={0.1}
          marks
          min={0.1}
          max={2}
          value={getActiveElement().scale || 1}
          onChange={(_event, value) => transformElement('scale', value)}
        />
        <Typography id="distance-slider" gutterBottom>
          Abstand
        </Typography>
        <Slider
          aria-labelledby="distance-slider"
          valueLabelDisplay="on"
          min={50}
          max={300}
          value={getActiveElement().distance || 50}
          onChange={(_event, value) => transformElement('distance', value)}
        />
      </Grid>
    </Grid>
  );
}
