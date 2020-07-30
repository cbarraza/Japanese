import { combineReducers } from 'redux';

import Dialogs from './Dialogs';
import Kanjis from './Kanjis';
import ControlPanel from './ControlPanel';
import Questions from './Questions';

export default combineReducers({
  Dialogs,
  Kanjis,
  ControlPanel,
  Questions
});
