import { useState } from 'react';

import { IconButton, ImageListItemBar } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InfoIcon from '@material-ui/icons/Info';

import useStore, { IMedia } from '../store';
import { BoardDialog } from './BoardDialog';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.info.main,
  },
  titleBar: {
    background: 'none',
  },
}));

export default function Item({ item }: { item: IMedia }) {
  const classes = useStyles();
  const { isMaaS, getSelectedElements } = useStore();
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
      <ImageListItemBar
        title={item.shortName}
        position="top"
        classes={{
          root: classes.titleBar,
          title: classes.title,
        }}
        actionIcon={
          <>
            <IconButton
              aria-label={`Select ${item.shortName}`}
              onClick={() =>
                item.selected ? deselectElement(item) : getSelectedElements().length === 5 || selectElement(item)
              }
            >
              {item.selected ? (
                <FavoriteIcon className={classes.title} />
              ) : (
                <FavoriteBorderIcon className={classes.title} />
              )}
            </IconButton>
            {!isMaaS && (
              <IconButton aria-label={`Info about ${item.shortName}`} onClick={handleClickOpen}>
                <InfoIcon className={classes.title} />
              </IconButton>
            )}
          </>
        }
        actionPosition="left"
      />
      <BoardDialog
        selectedItem={item}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
