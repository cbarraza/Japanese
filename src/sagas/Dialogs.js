import { fork, put, takeEvery } from 'redux-saga/effects';

import { EXAMPLE_ACTION } from '../reducers/Dialogs';

export function* exampleAction() {
  yield takeEvery(EXAMPLE_ACTION, function* (action) {
    console.log('exampleAction', action);
  })
}

export default function* sagas() {
  yield fork(exampleAction);
};