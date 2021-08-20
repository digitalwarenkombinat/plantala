import Fab from '@material-ui/core/Fab';
import Replay from '@material-ui/icons/Replay';
import Link from 'next/link';

export default function ShareFab() {
  return (
    <Link href="/edit" passHref>
      <Fab variant="extended" color="primary">
        <Replay />
        Starte ein neues Plantala
      </Fab>
    </Link>
  );
}
