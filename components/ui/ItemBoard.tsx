import { Avatar, Grid, Slider, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import useStore, { ELEMENT_SUFFIX } from '../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemBoard: {
      padding: theme.spacing(2, 4),
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
          src={`${process.env.pathPrefix}/images/${mediaPath}${getActiveElement().source}${ELEMENT_SUFFIX}`}
        />
      </Grid>
      <Grid item>
        <Typography id="rotation-slider">Rotation</Typography>
        <Slider
          aria-labelledby="rotation-slider"
          valueLabelDisplay="auto"
          max={360}
          value={getActiveElement().rotation || 0}
          onChange={(_event, value) => transformElement('rotation', value)}
        />
        <Typography id="rotation-slider">Menge</Typography>
        <Slider
          aria-labelledby="amount-slider"
          valueLabelDisplay="auto"
          step={2}
          marks
          min={4}
          max={20}
          value={getActiveElement().amount || 8}
          onChange={(_event, value) => transformElement('amount', value)}
        />
        <Typography id="rotation-slider">Größe</Typography>
        <Slider
          aria-labelledby="scale-slider"
          valueLabelDisplay="auto"
          step={0.1}
          marks
          min={0.1}
          max={2}
          value={getActiveElement().scale || 1}
          onChange={(_event, value) => transformElement('scale', value)}
        />
        <Typography id="distance-slider">Abstand</Typography>
        <Slider
          aria-labelledby="distance-slider"
          valueLabelDisplay="auto"
          min={50}
          max={300}
          value={getActiveElement().distance || 50}
          onChange={(_event, value) => transformElement('distance', value)}
        />
      </Grid>
    </Grid>
  );
}
