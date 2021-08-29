import { useState } from 'react';

import { IconButton, ImageListItem, ImageListItemBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import useStore, { ELEMENT_SUFFIX, IMedia } from '../store';
import { BoardDialog } from './BoardDialog';

export const useStyles = makeStyles((theme) => ({
  item: {
    paddingRight: theme.spacing(1),
  },
  title: {
    color: theme.palette.common.white,
  },
  titleBar: {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  itemMedia: {
    filter: 'drop-shadow(1px 2px 3px black)',
  },
}));

export default function Item({ item }: { item: IMedia }) {
  const classes = useStyles();
  const mediaPath = useStore((state) => state.mediaPath);
  const selectElement = useStore((state) => state.selectElement);
  const deselectElement = useStore((state) => state.deselectElement);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ImageListItem className={classes.item}>
        <img
          alt={item.name}
          className={classes.itemMedia}
          src={`${process.env.pathPrefix}/images/${mediaPath}${item.source}${ELEMENT_SUFFIX}`}
          onClick={handleClickOpen}
        />
        <ImageListItemBar
          title={item.shortName}
          subtitle="Klicke auf die Pflanze um mehr zu erfahren"
          position="top"
          classes={{
            root: classes.titleBar,
            title: classes.title,
          }}
          actionIcon={
            <IconButton
              aria-label={`Herz ${item.shortName}`}
              onClick={() => (item.selected ? deselectElement(item) : selectElement(item))}
            >
              {item.selected ? (
                <FavoriteIcon className={classes.title} />
              ) : (
                <FavoriteBorderIcon className={classes.title} />
              )}
            </IconButton>
          }
          actionPosition="left"
        />
      </ImageListItem>
      <BoardDialog selectedItem={item} open={open} onClose={handleClose} />
    </>
  );
}
