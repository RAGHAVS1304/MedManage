import React from 'react';
import { Grid } from '@mui/material';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
    </Grid>
  );
};

export default Posts;
