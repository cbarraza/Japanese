import { actionCreator, createReducer } from '../utils';

// Constants
export const RESET_STUDENTS = 'Questions/RESET_STUDENTS';
export const UPDATE_QUESTION = 'Questions/UPDATE_QUESTION';
const UPDATE_QUESTION_SUCCESS = 'Questions/UPDATE_QUESTION_SUCCESS';
export const UPDATE_STUDENT = 'Questions/UPDATE_STUDENT';

// Actions
export const resetStudents = actionCreator(RESET_STUDENTS);
export const updateQuestion = actionCreator(UPDATE_QUESTION, 'question');
export const updateQuestionSuccess = actionCreator(UPDATE_QUESTION_SUCCESS, 'result');
export const updateStudent = actionCreator(UPDATE_STUDENT, 'student');

// Default State
const defaultState = {
  loading: false,
  questions: [],
  students: []
};

const reducer = createReducer(defaultState, {
  [RESET_STUDENTS](state, action) {
    state.students = state.students.map(student => {
      return { ...student, used: false };
    });
  },
  [UPDATE_QUESTION_SUCCESS](state, action) {
    state.questions = state.questions.map(question => {
      if (question.id === action.result.id) {
        return action.result;
      }
      return question;
    });
  },
  [UPDATE_STUDENT](state, action) {
    state.students = state.students.map(student => {
      if (student.id === action.student.id) {
        return action.student;
      }
      return student;
    });
  }
});

export default reducer;
