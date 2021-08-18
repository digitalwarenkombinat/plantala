import { IconButton, ImageListItem, ImageListItemBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Image from 'next/image'

import useStore from "../store";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: 2,
  },
  title: {
    color: theme.palette.common.white,
  },
  titleBar: {
    background:
    'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  itemMedia: {
    backgroundColor: theme.palette.secondary.main,
    filter: 'drop-shadow(1px 2px 3px black)',
  },
  itemActions: {
    justifyContent: 'space-evenly'
  }
}));

export default function Item({item}) {
  const classes = useStyles();
  const mediaPath = useStore(state => state.mediaPath)
  const updateElement = useStore(state => state.updateElement)

  return (
    <ImageListItem className={classes.item}>
      <Image alt={item.name} className={classes.itemMedia}
      src={`/images/${mediaPath}${item.source}`} width={400} height={400} />
      <ImageListItemBar
        title={item.name}
        subtitle={item.description}
        position="top"
        classes={{
          root: classes.titleBar,
          title: classes.title,
        }}
        actionIcon={
        <IconButton aria-label={`Herz ${item.name}`} onClick={() => updateElement(item)}>
          {item.selected ?
          <FavoriteIcon className={classes.title} /> :
          <FavoriteBorderIcon className={classes.title} /> }
        </IconButton>}
        actionPosition="left" />
    </ImageListItem>
  );
}

