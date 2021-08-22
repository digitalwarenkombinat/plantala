import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import Link from 'next/link';

import useStore from './store';

const mediaPath = useStore.getState().mediaPath;

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" passHref>
          <div>
            <Image alt="Plantala Logo" src={`/images/${mediaPath}logo.svg`} width={60} height={60} />
          </div>
        </Link>
        <Typography variant="h2">Plantala</Typography>
      </Toolbar>
    </AppBar>
  );
}
