import React, { Fragment, useState } from 'react';
// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// Components
import Loading from '../Loading';

const StudentsModal = ({ loading, onSubmit, open, student, toggle }) => {
  const [ name, setName ] = useState('');

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onEnter() {
    if (student._id) {
      setName(student.name);
    } else {
      setName('');
    }
  }

  function submit() {
    const newStudent = {
      name
    };
    if (student._id) {
      newStudent._id = student._id;
    }
    onSubmit(newStudent);
  }

  const action = student._id ? 'Editar' : 'Crear';
  const disabledButton = name.length === 0;

  return (
    <Dialog
      onClose={toggle}
      onEnter={onEnter}
      open={open}
    >
      <DialogTitle>{action} estudiante</DialogTitle>
      <DialogContent>
        <Grid justify="center" container>
          <TextField label="Nombre" onChange={onChangeName} value={name} variant="outlined" fullWidth/>
        </Grid>
      </DialogContent>
      <DialogActions>
        {
          loading ?
          <Loading /> : 
          <Fragment>
            <Button onClick={toggle}>Cancelar</Button>
            <Button disabled={disabledButton} onClick={submit}>{action}</Button>
          </Fragment>
        }
      </DialogActions>
    </Dialog>
  );
};

export default StudentsModal;
