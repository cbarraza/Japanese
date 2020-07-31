import React, { Fragment, useState } from 'react';
// Material UI
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
// Material UI Icons
import AddIcon from '@material-ui/icons/Add';
// Components
import QuestionsModal from '../../components/QuestionsModal';
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
  { key: 'content', label: 'Contenido' },
  { key: 'type', label: 'Tipo' }
];

const containerStyle = {
  display: 'flex',
  height: '75vh',
  padding: '2vw'
};

const QuestionManager = ({ loading, modalOpen, onDelete, onSubmit, questions, toggleModal }) => {
  const [ selectedQuestion, setSelectedQuestion ] = useState({});

  function onAdd() {
    setSelectedQuestion({});
    toggleModal();
  }

  function onEdit(question) {
    setSelectedQuestion(question);
    toggleModal();
  }

  return (
    <Fragment>
      <Grid container style={containerStyle}>
        <Table columns={columnHeaders} data={questions} loading={loading} onDelete={onDelete} onEdit={onEdit}  showActions />
      </Grid>
      <Fab onClick={onAdd} style={actionButtonStyle}>
        <AddIcon />
      </Fab>
      <QuestionsModal loading={loading} question={selectedQuestion} onSubmit={onSubmit} open={modalOpen} toggle={toggleModal} />
    </Fragment>
  );
};

export default QuestionManager;
