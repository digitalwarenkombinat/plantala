import Link from 'next/link';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  }
}));

export default function StartFab() {
  const classes = useStyles();

  return (
    <Link href="/select" passHref>
      <Fab variant="extended" color="primary" className={classes.fab}>
        <AddIcon className={classes.extendedIcon} />
        Erstelle dein Plantala
      </Fab>
    </Link>
  );
}
