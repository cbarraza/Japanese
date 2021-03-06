import { actionCreator, createReducer } from '../utils';

// Constants
export const EXAMPLE_ACTION = 'Kanjis/EXAMPLE_ACTION';

// Actions
export const exampleAction = actionCreator(EXAMPLE_ACTION, 'param1', 'param2');

// Default State
const defaultState = {
  loading: false,
  questions: [],
  students: []
};

const reducer = createReducer(defaultState, {
  [EXAMPLE_ACTION](state, action) {
    state.example = !state.example;
  }
});

export default reducer;
