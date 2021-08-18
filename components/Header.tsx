import Image from 'next/image'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStore from "./store";

const mediaPath = useStore.getState().mediaPath;

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Image
          alt="Plantala Logo"
          src={`/images/${mediaPath}logo.png`}
          width={40}
          height={40}
        />
        <Typography variant="h2" >
          Plantala
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
