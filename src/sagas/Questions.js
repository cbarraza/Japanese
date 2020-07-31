import { fork, put, takeEvery } from 'redux-saga/effects';

import { 
  UPDATE_QUESTION,
  updateQuestionSuccess
} from '../reducers/Questions';

export function* updateQuestion() {
  yield takeEvery(UPDATE_QUESTION, function* (action) {
    console.log('updateQuestion', action);
  })
}

export default function* sagas() {
  yield fork(updateQuestion);
};