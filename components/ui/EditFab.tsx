import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
import Link from 'next/link';

export default function SelectFab() {
  return (
    <Link href="/share" passHref as={process.env.BACKEND_URL + '/'}>
      <Fab variant="extended" color="primary" aria-label="share">
        <ShareIcon />
        Teile dein Plantala
      </Fab>
    </Link>
  );
}
