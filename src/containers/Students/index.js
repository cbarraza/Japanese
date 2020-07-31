import React, { Fragment, useState } from 'react';
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
  display: 'flex',
  height: '75vh',
  padding: '2vw'
};

const Students = ({ loading, modalOpen, onDelete, onSubmit, students, toggleModal }) => {
  const [ selectedStudent, setSelectedStudent ] = useState({});

  function onAdd() {
    setSelectedStudent({});
    toggleModal();
  }

  function onEdit(student) {
    setSelectedStudent(student);
    toggleModal();
  }

  return (
    <Fragment>
      <Grid container justify="center" style={containerStyle}>
        <Table columns={columnHeaders} data={students} loading={loading} onEdit={onEdit} onDelete={onDelete} showActions />
      </Grid>
      <Fab onClick={onAdd} style={actionButtonStyle}>
        <AddIcon />
      </Fab>
      <StudentsModal loading={loading} onSubmit={onSubmit} open={modalOpen} student={selectedStudent} toggle={toggleModal} />
    </Fragment>
  );
};

export default Students;
