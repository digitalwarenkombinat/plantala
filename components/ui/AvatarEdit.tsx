import { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import useStore, { ELEMENT_SUFFIX } from '../store';
import ItemBoard from './ItemBoard';

const useStyles = makeStyles((theme: Theme) => ({
  avatarList: {
    padding: theme.spacing(4, 2),
  },
  avatar: {
    borderColor: theme.palette.info.main,
  },
}));

export default function AvatarEdit() {
  const classes = useStyles();
  const { getSelectedElements, mediaPath } = useStore();
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
    <Grid item xs={12} className={classes.avatarList}>
      <Grid container justifyContent="space-evenly">
        {getSelectedElements().map((element) => (
          <Grid key={element.name} item>
            <Avatar
              key={element.name}
              alt={element.name}
              src={`${process.env.pathPrefix}/images/${mediaPath}${element.source}${ELEMENT_SUFFIX}`}
              onClick={() => activateElement(element)}
              className={classes.avatar}
            />
          </Grid>
        ))}
      </Grid>
      <SwipeableDrawer anchor="top" open={isOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <ItemBoard />
      </SwipeableDrawer>
    </Grid>
  );
}
