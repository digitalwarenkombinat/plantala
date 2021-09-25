import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

import useStore, { AVATAR_COUNT, ELEMENT_SUFFIX } from '../store';

const useStyles = makeStyles((theme: Theme) => ({
  avatarList: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '25%',
      paddingRight: '25%',
    },
  },
  avatar: {
    cursor: 'initial',
  },
  emptyAvatar: {
    opacity: '0.8',
    borderColor: theme.palette.primary.main,
    cursor: 'initial',
  },
}));

export default function AvatarSelection() {
  const classes = useStyles();
  const { getSelectedElements, mediaPath } = useStore();
  const numberOfEmptyItems = Math.max(0, AVATAR_COUNT - getSelectedElements().length);

  return (
    <Grid item xs={12} className={classes.avatarList}>
      <Grid container justifyContent="space-evenly">
        {getSelectedElements().map((element) => (
          <Grid key={element.name} item>
            <Avatar
              key={element.name}
              alt={element.name}
              src={`${process.env.pathPrefix}/images/${mediaPath}${element.source}${ELEMENT_SUFFIX}`}
              className={classes.avatar}
            />
          </Grid>
        ))}
        {[...Array(numberOfEmptyItems).keys()].map((index) => (
          <Grid key={index} item>
            <Avatar
              src={`${process.env.pathPrefix}/images/plants/empty.svg`}
              className={classes.emptyAvatar}
              alt="Empty element"
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
