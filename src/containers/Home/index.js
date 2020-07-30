import React from 'react';
// Material UI
import Grid from '@material-ui/core/Grid';

const mainGridStyle = {
  height: '85vh'
};

const spanStyle = {
  fontSize: '5em',
  fontWeight: 'bold'
};

const Home = props => {
  return (
    <Grid container justify="center" alignItems="center" style={mainGridStyle}>
      <span style={spanStyle}>がんばりましょう！</span>
    </Grid>
  );
};

export default Home;
