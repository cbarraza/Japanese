import React from 'react';
import { connect } from 'react-redux';
// Reducer
import * as kanjisActions from '../../reducers/Kanjis';
// Utils
import { initContainer } from '../../utils';

const Kanjis = props => {
  return (
    <h1>Kanjis</h1>
  );
};

export default connect(...initContainer('Kanjis', kanjisActions))(Kanjis);
