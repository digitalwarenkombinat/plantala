import React from 'react';
import { Box, Card, CardActions, CardContent, CardHeader, Link, IconButton, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import LazyCardMedia from './LazyCardMedia';

const useStyles = makeStyles((theme) => ({
  plant: {
    textAlign: 'center',
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderWidth: 2,
    cursor: 'pointer'
  },
  plantHeader: {
    hyphens: 'auto',
  },
  plantMedia: {
    paddingTop: '100%',
    filter: 'drop-shadow(1px 2px 3px black)'
  },
  plantContent: {
    padding: 2,
    hyphens: 'auto',
  },
  plantActions: {
    justifyContent: 'space-evenly'
  }
}));

export default function PlantList() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box display="flex">
        {theme.mediaDataImages.map(plant => (
          <Card 
            key={plant.name}
            className={classes.plant}>
            <CardHeader
              title={plant.name}
              className={classes.plantHeader}
            />
            <LazyCardMedia
              className={classes.plantMedia}
              image={`/images/${theme.mediaDataPath}${plant.source}`}
              title={plant.name}
            />
            {plant.description &&
            <CardContent className={classes.plantContent}>
              <Typography>{plant.description}</Typography>
            </CardContent>}
            <CardActions className={classes.plantActions}>
              <Link href={plant.wiki} target="_blank" rel="noreferrer" > {'Wiki'} </Link>
              <Link href={plant.link} target="_blank" rel="noreferrer" > {'Quelle'} </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
  );
}
