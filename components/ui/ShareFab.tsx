import Fab from '@material-ui/core/Fab';
import Replay from '@material-ui/icons/Replay';

import CustomLink from '../CustomLink';
import useStore from '../store';

export default function ShareFab() {
  const resetElements = useStore((state) => state.resetElements);
  return (
    <CustomLink href="/">
      <Fab variant="extended" color="primary" aria-label="replay" onClick={resetElements}>
        <Replay />
        Noch mal ganz von vorn
      </Fab>
    </CustomLink>
  );
}
