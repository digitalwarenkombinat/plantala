import Image from 'next/image'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

export default function Header() {
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Image
          alt="Plantala Logo"
          src={`/images/${theme.mediaDataPath}logo.png`}
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
