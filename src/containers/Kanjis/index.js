import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// Reducer
import * as kanjisActions from '../../reducers/Kanjis';
// Components
import QuestionSelector from '../../components/QuestionSelector';
import StudentsSelector from '../../components/StudentsSelector';
// Utils
import { initContainer } from '../../utils';

const Kanjis = ({ loading, questions, students }) => {
  

  return (
    <Fragment>
      <h1>Kanjis</h1>
      <StudentsSelector selectedStudents={[]} selectStudents={() => {}} students={[]} />
      <QuestionSelector label="Lectura" question={'question'} selectQuestion={() => {}} />
    </Fragment>
  );
};

export default connect(...initContainer('Kanjis', kanjisActions))(Kanjis);
