import { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useStore, { ELEMENT_SUFFIX } from '../store';
import ItemBoard from './ItemBoard';

const useStyles = makeStyles((theme: Theme) => ({
  avatarList: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingLeft: '25%',
      paddingRight: '25%',
    },
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

  const theme = useTheme();
  const matchesUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const anchor = matchesUpMd ? 'left' : 'top';

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
      <SwipeableDrawer anchor={anchor} open={isOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <ItemBoard />
      </SwipeableDrawer>
    </Grid>
  );
}
