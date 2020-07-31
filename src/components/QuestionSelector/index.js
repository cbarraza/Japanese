import React, { Fragment } from 'react';
// Material UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// Constants
import { PRIMARY_COLOR } from '../../constants/colors';

const buttonStyle = {
  backgroundColor: PRIMARY_COLOR,
  color: 'white',
  fontSize: '1.5em',
  fontWeight: 'bold'
};

const containerStyle = {
  border: '1px solid black',
  borderRadius: '10px',
  fontSize: '2em',
  height: '50vh',
  padding: '1vw'
};

const QuestionSelector = ({ label, question = {}, selectQuestion }) => {  
  return (
    <Fragment>
      <h2>{label}</h2>
      <Grid container spacing={2}>
        <Grid item xs={10} style={containerStyle}>
          { question.content }
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth onClick={selectQuestion} style={buttonStyle} variant="contained">Elegir</Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default QuestionSelector;
