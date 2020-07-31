import React, { Fragment } from 'react';
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
  height: '75vh',
  padding: '2vw'
};

const QuestionManager = ({ loading, modalOpen, questions, toggleModal }) => {
  return (
    <Fragment>
      <Grid container style={containerStyle}>
        <Grid container justify="center">
          <Table columns={columnHeaders} data={questions} loading={loading} showActions />
        </Grid>
        <Fab onClick={toggleModal} style={actionButtonStyle}>
          <AddIcon />
        </Fab>
      </Grid>
      <QuestionsModal loading={loading} open={modalOpen} toggle={toggleModal} />
    </Fragment>
  );
};

export default QuestionManager;
