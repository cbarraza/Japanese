import { fork } from 'redux-saga/effects';

import dialogsSagas from './Dialogs';
import kanjisSagas from './Kanjis';
import controlPanelSagas from './ControlPanel';
import questionsSagas from './Questions';

export default function* sagas() {
  yield fork(dialogsSagas);
  yield fork(kanjisSagas);
  yield fork(controlPanelSagas);
  yield fork(questionsSagas);
}