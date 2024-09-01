// App.js
import React from 'react';
import { Box, Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/posts';
import Form from './components/Form/Form';
import FriendVerse from './images/FriendVerse.png';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          FriendsVerse
        </Typography>
        <Box component="img" src={FriendVerse} alt="Friendsverse" className={classes.image} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
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
}

export default App;
