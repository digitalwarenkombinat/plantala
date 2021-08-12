import { IconButton, ImageListItem, ImageListItemBar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.main,
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    hyphens: 'auto',
  },
  title: {
    color: theme.palette.common.white,
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  itemMedia: {
    filter: 'drop-shadow(1px 2px 3px black)',
  },
  itemActions: {
    justifyContent: 'space-evenly'
  }
}));

export default function Item({item}) {
  const classes = useStyles();
  const {mediaDataPath} = useTheme();

  return (
    <ImageListItem>
      <Image alt={item.name} className={classes.itemMedia}
      src={`/images/${mediaDataPath}${item.source}`} width={400} height={400} />
      <ImageListItemBar
        title={item.name}
        subtitle={item.description}
        position="top"
        classes={{
          root: classes.titleBar,
          title: classes.title,
        }}
        actionIcon={<IconButton aria-label={`Herz ${item.name}`}>
          <FavoriteIcon className={classes.title} />
        </IconButton>}
        actionPosition="left" />
    </ImageListItem>
  );
}

