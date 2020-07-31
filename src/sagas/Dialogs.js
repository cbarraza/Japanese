import { all, fork, put, takeEvery } from 'redux-saga/effects';

import { 
  GET_DATA, 
  getDataSuccess,
  UPDATE_QUESTION,
  updateQuestionSuccess
} from '../reducers/Dialogs';

export function* getData() {
  yield takeEvery(GET_DATA, function* (action) {
    const [ studentsResponse, questionsResponse ] = yield all([
      fetch('http://localhost:3000/api/student'),
      fetch('http://localhost:3000/api/question?type=dialog')
    ]);
    const [ studentsJson, questionJson ] = yield all([
      studentsResponse.json(),
      questionsResponse.json()
    ]);
    const result = {
      students: studentsJson,
      questions: questionJson,
    };
    yield put(getDataSuccess(result));
  })
}

export function* updateQuestion() {
  yield takeEvery(UPDATE_QUESTION, function* (action) {
    const response = yield fetch('http://localhost:3000/api/question', {
      method: 'PUT',
      body: JSON.stringify(action.question),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const responseJson = yield response.json();
    yield put(updateQuestionSuccess(responseJson));
  })
}

export default function* sagas() {
  yield fork(getData);
  yield fork(updateQuestion);
};