import { Dialog, DialogActions, DialogContent, DialogTitle, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useStore, { BOARD_SUFFIX, IMedia } from '../store';

export const useStyles = makeStyles(() => ({
  boardMedia: {
    width: '75%',
    height: 'auto',
  },
}));

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
    <Dialog onClose={handleClose} aria-labelledby="board-dialog" open={open} maxWidth={'md'}>
      <DialogTitle id="board-dialog-title">{selectedItem.name}</DialogTitle>
      <DialogContent>{selectedItem.description}</DialogContent>
      <img
        alt={selectedItem.name}
        className={classes.boardMedia}
        src={`${process.env.pathPrefix}/images/${mediaPath}${selectedItem.source}${BOARD_SUFFIX}`}
        width={800}
        height={1000}
      />
      <DialogActions>
        <Link href={selectedItem.link} target="_blank" rel="noreferrer">
          Erfahre noch mehr über diese Lehrtafel
        </Link>
      </DialogActions>
    </Dialog>
  );
}
