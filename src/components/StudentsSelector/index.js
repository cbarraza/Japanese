import React, { Fragment } from "react";
// Material UI
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
// Constants
import { PRIMARY_COLOR } from '../../constants/colors';

const buttonStyle = {
  backgroundColor: PRIMARY_COLOR,
  color: 'white',
  fontSize: '1.5em',
  fontWeight: 'bold'
};

const chipStyle = {
  backgroundColor: PRIMARY_COLOR,
  color: 'white',
  fontSize: '1.5em',
  fontWeight: 'bold',
  margin: '0 .5vw'
};

const containerStyle = {
  border: '1px solid black',
  borderRadius: '10px',
  padding: '1vw'
};

const selectedStudentsStyle = {
  height: '8vh'
};

const studentStyle = {
  backgroundColor: PRIMARY_COLOR,
  borderRadius: '10px',
  color: 'white',
  fontSize: '1.5em',
  fontWeight: 'bold',
  margin: '1vw',
  padding: '1vw',
  textAlign: 'center'
};

const StudentsSelector = ({ selectedStudents = [], selectStudents, students = [] }) => {  
  return (
    <Fragment>
      <h2>Participantes</h2>
      <Grid container spacing={2}>
        <Grid item xs={10} style={containerStyle}>
          {
            students.map(student => (
              <Chip disabled={student.used} key={student.name} label={student.name} style={chipStyle} />
            ))
          }
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth onClick={selectStudents} style={buttonStyle} variant="contained">Elegir</Button>
        </Grid>
      </Grid>
      <Grid container justify="center" style={selectedStudentsStyle}>
        {
          selectedStudents.map(selectedStudent => (
            <Grid item key={selectedStudent._id} xs={3} style={studentStyle}>
              {selectedStudent.name}
            </Grid>
          ))
        }
      </Grid>
    </Fragment>
  );
};

export default StudentsSelector;
