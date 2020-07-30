import React from 'react';
import { connect } from 'react-redux';
// Reducer
import * as controlPanelActions from '../../reducers/ControlPanel';
// Utils
import { initContainer } from '../../utils';

const ControlPanel = props => {
  return (
    <h1>ControlPanel</h1>
  );
};

export default connect(...initContainer('ControlPanel', controlPanelActions))(ControlPanel);
