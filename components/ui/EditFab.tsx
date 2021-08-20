import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
import Link from 'next/link';

export default function SelectFab() {
  return (
    <Link href="/share" passHref>
      <Fab variant="extended" color="primary">
        <ShareIcon />
        Teile dein Plantala
      </Fab>
    </Link>
  );
}
