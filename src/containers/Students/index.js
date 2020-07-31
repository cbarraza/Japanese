import React, { Fragment } from 'react';
// Material UI
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
// Material UI Icons
import AddIcon from '@material-ui/icons/Add';
// Components
import StudentsModal from '../../components/StudentsModal';
import Table from '../../components/Table';
// Constants
import { PRIMARY_COLOR } from '../../constants/colors';

const actionButtonStyle = {
  backgroundColor: PRIMARY_COLOR,
  bottom: '3vh',
  color: 'white',
  position: 'absolute',
  right: '3vw',
  zIndex: 2
};

const columnHeaders = [
  { key: 'name', label: 'Nombre' }
];

const containerStyle = {
  height: '75vh',
  padding: '2vw'
};

const Students = ({ loading, modalOpen, onSubmit, students, toggleModal }) => {
  return (
    <Fragment>
      <Grid container style={containerStyle}>
        <Grid container justify="center">
          <Table columns={columnHeaders} data={students} loading={loading} showActions />
        </Grid>
        <Fab onClick={toggleModal} style={actionButtonStyle}>
          <AddIcon />
        </Fab>
      </Grid>
      <StudentsModal loading={loading} onSubmit={onSubmit} open={modalOpen} toggle={toggleModal} />
    </Fragment>
  );
};

export default Students;
