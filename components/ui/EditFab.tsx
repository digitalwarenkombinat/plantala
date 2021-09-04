import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';

import CustomLink from '../CustomLink';

export default function SelectFab() {
  return (
    <CustomLink href="/share">
      <Fab variant="extended" color="primary" aria-label="share">
        <ShareIcon />
        Fertig!
      </Fab>
    </CustomLink>
  );
}
