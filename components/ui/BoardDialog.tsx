import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

import CustomLink from '../CustomLink';
import useStore, { BOARD_SUFFIX, ELEMENT_SUFFIX, IMedia } from '../store';
import { useStyles } from './Item';

export function BoardDialog({
  onClose,
  selectedItem,
  open,
}: {
  onClose: () => void;
  selectedItem: IMedia;
  open: boolean;
}) {
  const classes = useStyles();
  const { mediaPath } = useStore();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="board-dialog-title" open={open}>
      <DialogTitle id="board-dialog-title">{selectedItem.name}</DialogTitle>
      <DialogContent>{selectedItem.description}</DialogContent>
      <img
        alt={selectedItem.name}
        className={classes.boardMedia}
        src={`/images/${mediaPath}${selectedItem.source}${BOARD_SUFFIX}`}
        width={800}
        height={1000}
      />
      <DialogActions>
        <CustomLink href={selectedItem.wiki}>
          <a target="_blank">
            <img alt="IIIF Logo" src={`/images/${mediaPath}iiif${ELEMENT_SUFFIX}`} width={50} height={50} />
          </a>
        </CustomLink>
        <CustomLink href={selectedItem.link}>
          <a target="_blank">
            <Button onClick={handleClose} color="primary">
              Erfahre noch mehr über diese Lehrtafel
            </Button>
          </a>
        </CustomLink>
      </DialogActions>
    </Dialog>
  );
}
