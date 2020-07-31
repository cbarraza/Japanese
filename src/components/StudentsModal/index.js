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

const StudentsModal = ({ loading, open, student, toggle }) => {
  const [ name, setName ] = useState('');

  function onChangeName(event) {
    setName(event.target.value);
  }

  const action = student ? 'Editar' : 'Crear';

  return (
    <Dialog
      onClose={toggle}
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
            <Button onClick={() => {console.log(action)}}>{action}</Button>
          </Fragment>
        }
      </DialogActions>
    </Dialog>
  );
};

export default StudentsModal;
