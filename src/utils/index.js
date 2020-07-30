import React from 'react';
import produce from 'immer';
import { bindActionCreators } from 'redux';

export const actionCreator = (type, ...params) => (...values) => {
  const actionParams = {};
  params.forEach((param, index) => actionParams[param] = values[index]);
  return ({
    type,
    ...actionParams
  });
};

export const createReducer = (defaultState, reducers) => (state = defaultState, action) => {
  const reducer = reducers[action.type];
  return reducer ? produce(state, currentState => reducer(currentState, action)) : state;
};

export const initContainer = (containerName, actions) => {
  const mapStateToProps = state => {
    const containerState = state[containerName];
    return ({
      ...containerState
    });
  };
  const mapDispatchToProps = dispatch => ({ 
    actions: bindActionCreators(actions, dispatch) 
  });
  return [ mapStateToProps, mapDispatchToProps ];
};
