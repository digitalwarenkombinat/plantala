import Fab from '@material-ui/core/Fab';
import Replay from '@material-ui/icons/Replay';

import CustomLink from '../CustomLink';

export default function ShareFab() {
  return (
    <CustomLink href="/">
      <Fab variant="extended" color="primary" aria-label="replay">
        <Replay />
        Noch mal ganz von vorn
      </Fab>
    </CustomLink>
  );
}
