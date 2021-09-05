import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import useStore, { VEKTOR_SUFFIX } from '../store';

const useStyles = makeStyles((theme: Theme) => ({
  avatarList: {
    padding: theme.spacing(1, 4),
  },
  itemMedia: {
    width: '100%',
  },
  name: {
    fontSize: '12px',
    margin: theme.spacing(4, 0, 6),
  },
}));

export default function Poster() {
  const classes = useStyles();
  const { media, mediaPath } = useStore();

  return (
    <Grid item xs={12} className={classes.avatarList} id="poster">
      <Grid container alignItems="center">
        {media.map((element) => (
          <Grid key={element.name} item xs={3} container justifyContent="center">
            <img
              alt={element.name}
              className={classes.itemMedia}
              src={`${process.env.pathPrefix}/images/${mediaPath}${element.source}${VEKTOR_SUFFIX}`}
            />
            <Typography className={classes.name}>
              {element.name.substr(element.name.lastIndexOf('-') + 2, element.name.length - 1)}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
