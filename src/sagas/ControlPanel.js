import { all, fork, put, takeEvery } from 'redux-saga/effects';

import { 
  CREATE_UPDATE_STUDENT,
  createUpdateStudentSuccess,
  DELETE_STUDENT,
  deleteStudentSuccess,
  GET_DATA, 
  getDataSuccess 
} from '../reducers/ControlPanel';

export function* createUpdateStudent() {
  yield takeEvery(CREATE_UPDATE_STUDENT, function* (action) {
    const response = yield fetch('http://localhost:3000/api/student', {
      method: 'PUT',
      body: JSON.stringify(action.student),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const responseJson = yield response.json();
    yield put(createUpdateStudentSuccess(responseJson));
  })
}

export function* deleteStudent() {
  yield takeEvery(DELETE_STUDENT, function* (action) {
    yield fetch(`http://localhost:3000/api/student/${action.student._id}`, { method: 'DELETE' });
    yield put(deleteStudentSuccess(action.student));
  })
}

export function* getData() {
  yield takeEvery(GET_DATA, function* (action) {
    const [ studentsResponse, questionsResponse ] = yield all([
      fetch('http://localhost:3000/api/student'),
      fetch('http://localhost:3000/api/question')
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

export default function* sagas() {
  yield fork(createUpdateStudent);
  yield fork(deleteStudent);
  yield fork(getData);
};