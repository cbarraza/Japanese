import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
// Reducer
import * as questionsActions from '../../reducers/Questions';
// Components
import Loading from '../../components/Loading';
import QuestionSelector from '../../components/QuestionSelector';
import StudentsSelector from '../../components/StudentsSelector';
// Utils
import { initContainer } from '../../utils';

const Questions = ({ actions, loading, questions, students }) => {
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
      <h1>Preguntas</h1>
      { 
        loading ?
        <Loading /> :
        <Fragment>
          <StudentsSelector selectedStudents={selectedStudents} selectStudents={selectStudents} students={students} />
          <QuestionSelector disabled={disabledQuestionButton} label="Pregunta" question={question} selectQuestion={selectQuestion} />
        </Fragment>
      }
    </Fragment>
  );
};

export default connect(...initContainer('Questions', questionsActions))(Questions);
