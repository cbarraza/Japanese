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

const ControlPanel = ({ actions, loading, modalOpen, questions, students }) => {
  const [ tab, setTab ] = useState('students');

  useEffect(() => {
    actions.getData();
  }, []);

  function onChangeTab(_, value) {
    setTab(value);
  }

  return (
    <Fragment>
      <h1>Panel de Control</h1>
      <Tabs value={tab} onChange={onChangeTab}>
        <Tab label="Estudiantes" value="students" />
        <Tab label="Preguntas" value="questions" />
      </Tabs>
      {
        tab === 'students' &&
        <Students 
          loading={loading} 
          modalOpen={modalOpen} 
          onDelete={actions.deleteStudent} 
          onSubmit={actions.createUpdateStudent} 
          students={students} 
          toggleModal={actions.toggleModal} 
        />
      }
      {
        tab === 'questions' &&
        <QuestionManager 
          loading={loading} 
          modalOpen={modalOpen} 
          onDelete={actions.deleteQuestion} 
          onSubmit={actions.createUpdateQuestion}
          questions={questions} 
          toggleModal={actions.toggleModal} 
        />
      }
    </Fragment>
  );
};

export default connect(...initContainer('ControlPanel', controlPanelActions))(ControlPanel);
