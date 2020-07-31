import { actionCreator, createReducer } from '../utils';

// Constants
export const CREATE_UPDATE_STUDENT = 'ControlPanel/CREATE_UPDATE_STUDENT';
const CREATE_UPDATE_STUDENT_SUCCESS = 'ControlPanel/CREATE_UPDATE_STUDENT_SUCCESS';
export const GET_DATA = 'ControlPanel/GET_DATA';
const GET_DATA_SUCCESS = 'ControlPanel/GET_DATA_SUCCESS';
export const TOGGLE_MODAL = 'ControlPanel/TOGGLE_MODAL';

// Actions
export const createUpdateStudent = actionCreator(CREATE_UPDATE_STUDENT, 'student');
export const createUpdateStudentSuccess = actionCreator(CREATE_UPDATE_STUDENT_SUCCESS, 'result');
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
    if (state.students.some(student => student.id === action.result.id)) {
      state.students.map(student => {
        if (student.id === action.result.id) {
          return action.result;
        }
        return student;
      })
    } else {
      state.students = [ ...state.students, action.result ];
    }
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
