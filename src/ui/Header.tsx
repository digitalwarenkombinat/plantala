import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Divider, ListItemIcon } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme: Theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '2em',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '4em',
    },
  },
  logo: {
    height: '6em',
    width: '6em',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      height: '8em',
      width: '8em',
    },
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <img alt="Plantala logo" src={`/images/${theme.mediaDataPath}logo.png`} className={classes.logo} />
          <Typography className={classes.title} variant="h2">
            Plantala
          </Typography>
          <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
            aria-controls="plantala-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="plantala-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PriorityHighIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Hilfe</Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PriorityHighIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Über Plantala</Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PriorityHighIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Über Uns</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
}
