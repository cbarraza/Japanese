import { fork, put, takeEvery } from 'redux-saga/effects';

import { 
  GET_DATA, 
  getDataSuccess 
} from '../reducers/ControlPanel';

export function* getData() {
  yield takeEvery(GET_DATA, function* (action) {
    console.log('GET_DATA', action);
  })
}

export default function* sagas() {
  yield fork(getData);
};