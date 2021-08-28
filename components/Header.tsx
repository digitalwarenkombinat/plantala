import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CustomLink from './CustomLink';
import useStore from './store';

const mediaPath = useStore.getState().mediaPath;

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <CustomLink href="/">
          <div>
            <img
              alt="Plantala Logo"
              src={`${process.env.pathPrefix}/images/${mediaPath}logo.svg`}
              width={60}
              height={60}
            />
          </div>
        </CustomLink>
        <Typography variant="h2">Plantala</Typography>
      </Toolbar>
    </AppBar>
  );
}
