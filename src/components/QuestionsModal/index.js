import React, { Fragment, useState } from 'react';
// Material UI
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
// Components
import Loading from '../Loading';

const defaultState = {
  content: '',
  example: '',
  used: false,
  type: 'dialog'
};

const QuestionsModal = ({ loading, open, question, toggle }) => {
  const [ values, setValues ] = useState(defaultState);

  function onChange(event) {
    event.persist();
    setValues(prev => {
      return ({
        ...prev,
        [event.target.id ? event.target.id : 'type']: event.target.value ? event.target.value : event.target.checked
      })
    });
  }

  function onEnter() {
    setValues(defaultState);
  }

  const action = question ? 'Editar' : 'Crear';

  return (
    <Dialog
      fullWidth
      onClose={toggle}
      onEnter={onEnter}
      open={open}
    >
      <DialogTitle>{action} pregunta</DialogTitle>
      <DialogContent>
        <Grid container direction="column" justify="center" spacing={1}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="select-label">Tipo</InputLabel>
              <Select label="Tipo" labelId="select-label" onChange={onChange} value={values.type}>
                <MenuItem value="dialog">Diálogo</MenuItem>
                <MenuItem value="kanji">Kanji</MenuItem>
                <MenuItem value="question">Pregunta</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField id="content" label="Contenido" multiline onChange={onChange} rows={2} value={values.content} variant="outlined" fullWidth  />
          </Grid>
          {
            question && 
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox checked={values.used} id="used" onChange={onChange} />}
                label="Usado"
              />
            </Grid>
          }
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

export default QuestionsModal;
