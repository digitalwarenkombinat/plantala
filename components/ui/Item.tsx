import { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  ImageListItem,
  ImageListItemBar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Image from 'next/image';

import useStore, { BOARD_SUFFIX, ELEMENT_SUFFIX } from '../store';

const useStyles = makeStyles((theme) => ({
  item: {
    padding: 2,
  },
  title: {
    color: theme.palette.common.white,
  },
  titleBar: {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  itemMedia: {
    backgroundColor: theme.palette.secondary.main,
    filter: 'drop-shadow(1px 2px 3px black)',
  },
  itemActions: {
    justifyContent: 'space-evenly',
  },
  boardMedia: {
    padding: 2,
  },
}));

function BoardDialog({ onClose, selectedItem, open }) {
  const classes = useStyles();
  const { mediaPath } = useStore();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="board-dialog-title" open={open}>
      <DialogTitle id="board-dialog-title">{selectedItem.name}</DialogTitle>
      <Image
        alt={selectedItem.name}
        className={classes.boardMedia}
        src={`/images/${mediaPath}${selectedItem.source}${BOARD_SUFFIX}`}
        width={800}
        height={1000}
      />
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Mehr erfahren
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function Item({ item }) {
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
        <Image
          alt={item.name}
          className={classes.itemMedia}
          src={`/images/${mediaPath}${item.source}${ELEMENT_SUFFIX}`}
          width={400}
          height={400}
          onClick={handleClickOpen}
        />
        <ImageListItemBar
          title={item.name}
          subtitle={item.description}
          position="top"
          classes={{
            root: classes.titleBar,
            title: classes.title,
          }}
          actionIcon={
            <IconButton
              aria-label={`Herz ${item.name}`}
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
        <ImageListItemBar position="bottom" title="Klicke auf das Bild um die Lehrtafel zu sehen" />
      </ImageListItem>
      <BoardDialog selectedItem={item} open={open} onClose={handleClose} />
    </>
  );
}
