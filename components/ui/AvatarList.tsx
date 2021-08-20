import { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';

import useStore from '../store';
import ItemBoard from './ItemBoard';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
}));

export default function AvatarList() {
  const classes = useStyles();
  const { avatarCount, getSelectedElements, mediaPath } = useStore();
  const numberOfEmptyItems = avatarCount - getSelectedElements().length;
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const activateElement = (element) => {
    useStore.getState().activateElement(element);
    setOpen(true);
  };

  return (
    <Paper square className={classes.main}>
      <Grid container direction="column">
        {getSelectedElements().map((element) => (
          <Grid key={element.name} item container alignItems="center">
            <Avatar
              key={element.name}
              alt={element.name}
              src={`/images/${mediaPath}${element.source}`}
              onClick={() => activateElement(element)}
            />
            <Typography variant="h6" gutterBottom>
              {element.name}
            </Typography>
          </Grid>
        ))}
        {[...Array(numberOfEmptyItems).keys()].map((index) => (
          <Grid key={index} item container alignItems="center">
            <Avatar src={`/images/${mediaPath}logo.png`} />
            <Typography variant="h6" gutterBottom>
              Wähle deine nächste Pflanze ...
            </Typography>
          </Grid>
        ))}
      </Grid>
      <SwipeableDrawer anchor="top" open={isOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <ItemBoard />
      </SwipeableDrawer>
    </Paper>
  );
}
