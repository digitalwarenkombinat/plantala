import Link from 'next/link';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';

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
    <Link href="/share" passHref>
      <Fab variant="extended" color="primary" className={classes.fab}>
        <ShareIcon className={classes.extendedIcon} />
        Teile dein Plantala
      </Fab>
    </Link>
  );
}
