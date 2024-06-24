/** @jsxImportSource @emotion/react */
import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import { appBarStyles, headingStyles, imageStyles } from './styles';

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar css={appBarStyles} position="static" color="inherit">
        <Typography css={headingStyles} variant="h2" align="center">
          Memories
        </Typography>
        <img css={imageStyles} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};


export default App;
