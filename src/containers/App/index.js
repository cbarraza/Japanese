import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import NavBar from '../../components/NavBar';
// Containers
import ControlPanel from '../ControlPanel';
import Dialogs from '../Dialogs';
import Home from '../Home';
import Kanjis from '../Kanjis';
import Questions from '../Questions';
// Reducers
import reducers from '../../reducers';
// Sagas
import sagas from '../../sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(sagas);

const App = props => {
  return (
    <Provider store={store}>
      <NavBar />
      <div style={{ margin: '10px', marginTop: '12vh' }}>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/control-panel" component={ControlPanel} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/kanjis" component={Kanjis} />
          <Route path="/questions" component={Questions} />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
