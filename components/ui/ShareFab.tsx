import Fab from '@material-ui/core/Fab';
import Replay from '@material-ui/icons/Replay';
import Link from 'next/link';

export default function ShareFab() {
  return (
    <Link href="/" passHref>
      <Fab variant="extended" color="primary">
        <Replay />
        Noch mal ganz von vorn
      </Fab>
    </Link>
  );
}
