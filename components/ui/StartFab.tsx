import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';

export default function StartFab() {
  return (
    <Link href="/select" passHref as={process.env.BACKEND_URL + '/'}>
      <Fab variant="extended" color="primary" aria-label="add">
        <AddIcon />
        Erstelle dein Plantala
      </Fab>
    </Link>
  );
}
