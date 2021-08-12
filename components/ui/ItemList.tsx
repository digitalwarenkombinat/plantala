import { ImageList } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Item from './Item';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.main,
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    hyphens: 'auto',
  }
}));

export default function ItemList() {
  const classes = useStyles();
  const {mediaDataImages} = useTheme();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={1} gap={0}>
        {mediaDataImages.map((item) => (
          <Item key={item.source} item={item} />
        ))}
      </ImageList>
    </div>
  );
}


