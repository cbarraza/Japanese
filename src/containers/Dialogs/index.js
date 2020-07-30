import React from 'react';
import { connect } from 'react-redux';
// Reducer
import * as dialogsActions from '../../reducers/Dialogs';
// Utils
import { initContainer } from '../../utils';

const Dialogs = props => {
  return (
    <h1>Dialogs</h1>
  );
};

export default connect(...initContainer('Dialogs', dialogsActions))(Dialogs);
