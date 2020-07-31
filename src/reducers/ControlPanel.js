import { actionCreator, createReducer } from '../utils';

// Constants
export const GET_DATA = 'ControlPanel/GET_DATA';
const GET_DATA_SUCCESS = 'ControlPanel/GET_DATA_SUCCESS';
export const TOGGLE_MODAL = 'ControlPanel/TOGGLE_MODAL';

// Actions
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
