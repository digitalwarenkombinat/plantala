import { ImageList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Item from './Item';
import useStore from "../store";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    hyphens: 'auto',
  }
}));

export default function ItemList() {
  const classes = useStyles();
  const media = useStore(state => state.media)

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={1} gap={0}>
        {media.map((item) => (
          <Item key={item.source} item={item} />
        ))}
      </ImageList>
    </div>
  );
}


