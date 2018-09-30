import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable'
import { applicationReducer, applicationEpics } from './index';
import { initState } from './data/initDate';

const epicMiddleWare = createEpicMiddleware();

export const store = createStore(
  applicationReducer,
  initState,
  applyMiddleware(epicMiddleWare)
);

epicMiddleWare.run(applicationEpics);