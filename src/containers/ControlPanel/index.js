import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
// Material UI
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
// Components
import QuestionManager from '../QuestionManager';
import Students from '../Students';
// Reducer
import * as controlPanelActions from '../../reducers/ControlPanel';
// Utils
import { initContainer } from '../../utils';

const ControlPanel = props => {
  const [ tab, setTab ] = useState('students');

  useEffect(() => {
    const { actions } = props;
    //actions.getData();
  }, []);

  function onChangeTab(_, value) {
    setTab(value);
  }

  const { actions, loading, modalOpen } = props;

  return (
    <Fragment>
      <h1>Panel de Control</h1>
      <Tabs value={tab} onChange={onChangeTab}>
        <Tab label="Estudiantes" value="students" />
        <Tab label="Preguntas" value="questions" />
      </Tabs>
      {
        tab === 'students' &&
        <Students modalOpen={modalOpen} loading={loading} students={[]} toggleModal={actions.toggleModal} />
      }
      {
        tab === 'questions' &&
        <QuestionManager modalOpen={modalOpen} loading={loading} questions={[]} toggleModal={actions.toggleModal} />
      }
    </Fragment>
  );
};

export default connect(...initContainer('ControlPanel', controlPanelActions))(ControlPanel);
