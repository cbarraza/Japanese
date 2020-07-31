import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// Reducer
import * as dialogsActions from '../../reducers/Dialogs';
// Components
import QuestionSelector from '../../components/QuestionSelector';
import StudentsSelector from '../../components/StudentsSelector';
// Utils
import { initContainer } from '../../utils';

const Dialogs = ({ loading, questions, students }) => {
  return (
    <Fragment>
      <h1>Diálogos</h1>
      <StudentsSelector selectedStudents={[]} selectStudents={() => {}} students={[]} />
      <QuestionSelector label="Tema" question={'question'} selectQuestion={() => {}} />
    </Fragment>
  );
};

export default connect(...initContainer('Dialogs', dialogsActions))(Dialogs);
