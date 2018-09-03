import * as React from 'react';
import { combineReducers, Reducer, Action } from 'redux';
import { Epic, combineEpics } from 'redux-observable';
import { ISearchState } from './containers/search/types';
import searchReducer, { observableChainActionReducer } from './containers/search/reducers';
import ObservableChainEpic from './containers/search/epics';

export interface ApplicationState {
  search: ISearchState;
}

export const applicationReducer: Reducer<ApplicationState> = combineReducers({
  search: searchReducer,
  observableReducer: observableChainActionReducer
});

export const applicationEpics: Epic<Action, any> = combineEpics(
  ObservableChainEpic
);

