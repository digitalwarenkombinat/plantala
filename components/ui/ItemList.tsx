import { ImageList } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

import useStore from '../store';
import Item from './Item';

const useStyles = makeStyles((theme: Theme) => ({
  itemList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4, 0),
    },
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    hyphens: 'auto',
  },
}));

export default function ItemList() {
  const classes = useStyles();
  const media = useStore((state) => state.media);

  return (
    <Grid item xs={12} className={classes.itemList}>
      <ImageList className={classes.imageList} cols={1} gap={0}>
        {media.map((item) => (
          <Item key={item.source} item={item} />
        ))}
      </ImageList>
    </Grid>
  );
}
