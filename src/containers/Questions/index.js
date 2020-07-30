import React from 'react';
import { connect } from 'react-redux';
// Reducer
import * as questionsActions from '../../reducers/Questions';
// Utils
import { initContainer } from '../../utils';

const Questions = props => {
  return (
    <h1>Questions</h1>
  );
};

export default connect(...initContainer('Questions', questionsActions))(Questions);
