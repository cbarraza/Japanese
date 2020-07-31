import { actionCreator, createReducer } from '../utils';

// Constants
export const GET_DATA = 'Dialogs/GET_DATA';
const GET_DATA_SUCCESS = 'Dialogs/GET_DATA_SUCCESS';
export const RESET_STUDENTS = 'Dialogs/RESET_STUDENTS';
export const UPDATE_QUESTION = 'Dialogs/UPDATE_QUESTION';
const UPDATE_QUESTION_SUCCESS = 'Dialogs/UPDATE_QUESTION_SUCCESS';
export const UPDATE_STUDENT = 'Dialogs/UPDATE_STUDENT';

// Actions
export const getData = actionCreator(GET_DATA);
export const getDataSuccess = actionCreator(GET_DATA_SUCCESS, 'result');
export const resetStudents = actionCreator(RESET_STUDENTS);
export const updateQuestion = actionCreator(UPDATE_QUESTION, 'question');
export const updateQuestionSuccess = actionCreator(UPDATE_QUESTION_SUCCESS, 'result');
export const updateStudent = actionCreator(UPDATE_STUDENT, 'student');

// Default State
const defaultState = {
  questions: [],
  students: []
};

const reducer = createReducer(defaultState, {
  [GET_DATA_SUCCESS](state, action) {
    state.questions = action.result.questions;
    state.students = action.result.students;
  },
  [RESET_STUDENTS](state, action) {
    state.students = state.students.map(student => {
      return { ...student, used: false };
    });
  },
  [UPDATE_QUESTION_SUCCESS](state, action) {
    state.questions = state.questions.map(question => {
      if (question._id.toString() === action.result._id.toString()) {
        return action.result;
      }
      return question;
    });
  },
  [UPDATE_STUDENT](state, action) {
    state.students = state.students.map(student => {
      if (student._id.toString() === action.student._id.toString()) {
        return action.student;
      }
      return student;
    });
  }
});

export default reducer;
