import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import CustomLink from '../CustomLink';

export default function StartFab() {
  return (
    <CustomLink href="/select">
      <Fab variant="extended" color="primary" aria-label="add">
        <AddIcon />
        Los gehts
      </Fab>
    </CustomLink>
  );
}
