import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
// Reducer
import * as dialogsActions from '../../reducers/Dialogs';
// Components
import QuestionSelector from '../../components/QuestionSelector';
import StudentsSelector from '../../components/StudentsSelector';
// Utils
import { initContainer } from '../../utils';

const Dialogs = ({ actions, questions, students }) => {
  useEffect(() => {
    actions.getData();
  }, []);

  const [ selectedStudents, setSelectedStudents ] = useState([]);
  const [ question, setQuestion ] = useState('');

  function selectQuestion() {
    const filteredQuestions = questions.filter(question => !question.used);
    const index = Math.floor(Math.random() * filteredQuestions.length);
    const selectedQuestion = { ...filteredQuestions[index] };
    selectedQuestion.used = true;
    setQuestion(selectedQuestion);
    actions.updateQuestion(selectedQuestion);
  }

  function selectStudents() {
    const filteredStudents = students.filter(student => !student.used);
    const index = Math.floor(Math.random() * filteredStudents.length);
    const selectedStudent = { ...filteredStudents[index] };
    selectedStudent.used = true;
    setSelectedStudents([selectedStudent]);
    actions.updateStudent(selectedStudent)
    if (filteredStudents.length === 1) {
      actions.resetStudents();
    }
  }

  const disabledQuestionButton = !questions.some(question => !question.used);

  return (
    <Fragment>
      <h1>Diálogos</h1>
      <StudentsSelector selectedStudents={selectedStudents} selectStudents={selectStudents} students={students} />
      <QuestionSelector disabled={disabledQuestionButton} label="Tema" question={question} selectQuestion={selectQuestion} />
    </Fragment>
  );
};

export default connect(...initContainer('Dialogs', dialogsActions))(Dialogs);
