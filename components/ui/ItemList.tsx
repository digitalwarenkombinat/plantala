import { ImageList } from '@material-ui/core';
import { ImageListItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useStore, { ELEMENT_SUFFIX } from '../store';
import ItemBar from './ItemBar';

const useStyles = makeStyles((theme: Theme) => ({
  itemList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  imageListItem: {
    backgroundColor: theme.palette.secondary.main,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    borderWidth: '2px',
    borderRadius: '4px',
    margin: theme.spacing(1),
  },
  itemSelected: {
    borderColor: theme.palette.info.main,
  },
  itemMedia: {
    filter: 'drop-shadow(1px 2px 3px black)',
    padding: theme.spacing(8),
  },
}));

export default function ItemList() {
  const classes = useStyles();
  const media = useStore((state) => state.media);
  const mediaPath = useStore((state) => state.mediaPath);

  const theme = useTheme();
  const matchesUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const matchesUpMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid item xs={12} className={classes.itemList}>
      <ImageList
        className={classes.imageList}
        cols={matchesUpSm ? 2.5 : 1}
        gap={2}
        rowHeight={matchesUpSm ? (matchesUpMd ? 600 : 400) : 300}
      >
        {media.map((item) => (
          <ImageListItem
            key={item.source}
            className={`${classes.imageListItem} ${item.selected ? classes.itemSelected : ''}`}
          >
            <img
              alt={item.name}
              className={classes.itemMedia}
              src={`${process.env.pathPrefix}/images/${mediaPath}${item.source}${ELEMENT_SUFFIX}`}
            />
            <ItemBar item={item} />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}
