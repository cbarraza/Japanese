import { actionCreator, createReducer } from '../utils';

// Constants
export const CREATE_UPDATE_STUDENT = 'ControlPanel/CREATE_UPDATE_STUDENT';
const CREATE_UPDATE_STUDENT_SUCCESS = 'ControlPanel/CREATE_UPDATE_STUDENT_SUCCESS';
export const DELETE_STUDENT = 'ControlPanel/DELETE_STUDENT';
const DELETE_STUDENT_SUCCESS = 'ControlPanel/DELETE_STUDENT_SUCCESS';
export const GET_DATA = 'ControlPanel/GET_DATA';
const GET_DATA_SUCCESS = 'ControlPanel/GET_DATA_SUCCESS';
export const TOGGLE_MODAL = 'ControlPanel/TOGGLE_MODAL';

// Actions
export const createUpdateStudent = actionCreator(CREATE_UPDATE_STUDENT, 'student');
export const createUpdateStudentSuccess = actionCreator(CREATE_UPDATE_STUDENT_SUCCESS, 'result');
export const deleteStudent = actionCreator(DELETE_STUDENT, 'student');
export const deleteStudentSuccess = actionCreator(DELETE_STUDENT_SUCCESS, 'result');
export const getData = actionCreator(GET_DATA);
export const getDataSuccess = actionCreator(GET_DATA_SUCCESS, 'result');
export const toggleModal = actionCreator(TOGGLE_MODAL);

// Default State
const defaultState = {
  loading: false,
  modalOpen: false,
  questions: [],
  students: []
};

const reducer = createReducer(defaultState, {
  [CREATE_UPDATE_STUDENT](state, action) {
    state.loading = true;
  },
  [CREATE_UPDATE_STUDENT_SUCCESS](state, action) {
    state.loading = false;
    state.modalOpen = false;
    if (state.students.some(student => student._id.toString() === action.result._id.toString())) {
      state.students = state.students.map(student => {
        if (student._id.toString() === action.result._id.toString()) {
          return action.result;
        }
        return student;
      })
    } else {
      state.students = [ ...state.students, action.result ];
    }
  },
  [DELETE_STUDENT](state, action) {
    state.loading = true;
  },
  [DELETE_STUDENT_SUCCESS](state, action) {
    state.loading = false;
    state.students = state.students.filter(student => student._id.toString() !== action.result._id.toString());
  },
  [GET_DATA](state, action) {
    state.loading = true;
  },
  [GET_DATA_SUCCESS](state, action) {
    state.loading = false;
    state.questions = action.result.questions;
    state.students = action.result.students;
  },
  [TOGGLE_MODAL](state, action) {
    state.modalOpen = !state.modalOpen;
  }
});

export default reducer;
