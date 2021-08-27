import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Link from 'next/link';

export default function SelectFab() {
  return (
    <Link href="/edit" passHref as={process.env.BACKEND_URL + '/'}>
      <Fab variant="extended" color="primary" aria-label="edit">
        <EditIcon />
        Bearbeite dein Plantala
      </Fab>
    </Link>
  );
}
