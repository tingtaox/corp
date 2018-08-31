import * as React from 'react';
import { combineReducers, Reducer } from 'redux';
import { ISearchState } from './containers/search/types';
import searchReducer from './containers/search/reducers';

export interface ApplicationState {
  search: ISearchState;
}

export const applicationReducer: Reducer<ApplicationState> = combineReducers({
  search: searchReducer
});