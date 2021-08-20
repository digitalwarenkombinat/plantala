import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';

export default function StartFab() {
  return (
    <Link href="/select" passHref>
      <Fab variant="extended" color="primary">
        <AddIcon />
        Erstelle dein Plantala
      </Fab>
    </Link>
  );
}
