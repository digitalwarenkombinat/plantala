import Fab from '@material-ui/core/Fab';
import Replay from '@material-ui/icons/Replay';
import Link from 'next/link';

export default function ShareFab() {
  return (
    <Link href="/" passHref as={process.env.BACKEND_URL + '/'}>
      <Fab variant="extended" color="primary" aria-label="replay">
        <Replay />
        Noch mal ganz von vorn
      </Fab>
    </Link>
  );
}
