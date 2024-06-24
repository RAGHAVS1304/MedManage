import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import useStyles from './styles';

const Post = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image="/path/to/image.jpg" title="Image Title" />
      <div className={classes.overlay}>
        <Typography variant="h6">Overlay Text</Typography>
      </div>
      {/* Other card content */}
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">Like</Button>
        <Button size="small" color="primary">Edit</Button>
        <Button size="small" color="primary">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
