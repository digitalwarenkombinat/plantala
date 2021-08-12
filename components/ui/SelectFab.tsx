import Link from 'next/link';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function SelectFab() {
  const classes = useStyles();

  return (
    <Link href="/edit" passHref>
      <Fab variant="extended" color="primary" className={classes.fab}>
        <EditIcon className={classes.extendedIcon} />
        Bearbeite dein Plantala
      </Fab>
    </Link>
  );
}
