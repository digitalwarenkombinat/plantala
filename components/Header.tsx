import { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';

import CustomLink from './CustomLink';
import useStore from './store';
import { About } from './ui/About';

const mediaPath = useStore.getState().mediaPath;

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="relative">
      <Toolbar disableGutters>
        <CustomLink href="/">
          <img
            alt="Plantala Logo"
            src={`${process.env.pathPrefix}/images/${mediaPath}logo.svg`}
            width={60}
            height={60}
          />
        </CustomLink>
        <Typography variant="h2" component="h1">
          Plantala
        </Typography>
        <IconButton aria-label="about" onClick={handleClickOpen}>
          <InfoRoundedIcon color={'secondary'} />
        </IconButton>
      </Toolbar>
      <About open={open} onClose={handleClose} />
    </AppBar>
  );
}
