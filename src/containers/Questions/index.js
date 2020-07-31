import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// Reducer
import * as questionsActions from '../../reducers/Questions';
// Components
import QuestionSelector from '../../components/QuestionSelector';
import StudentsSelector from '../../components/StudentsSelector';
// Utils
import { initContainer } from '../../utils';

const Questions = ({ loading, questions, students }) => {


  return (
    <Fragment>
      <h1>Preguntas</h1>
      <StudentsSelector selectedStudents={[]} selectStudents={() => {}} students={[]} />
      <QuestionSelector label="Pregunta" question={'question'} selectQuestion={() => {}} />
    </Fragment>
  );
};

export default connect(...initContainer('Questions', questionsActions))(Questions);
