import * as React from 'react';
import { Reducer } from 'redux';
import { ApplicationState } from '../index';
import {
  SearchApiStatusAction,
  SearchApiStatusActionType
} from './actions';

export const searchApiRequestReducer: Reducer<ApplicationState> = (state: ApplicationState = null, action: SearchApiStatusAction) => {
  switch (action.type) {
    case SearchApiStatusActionType.LIST_HOUSE_API_SUCCESS:
      let newState = { ...state };
      newState.search.rawListItems = { ...newState.search.rawListItems, ...action.payload.data };
      return newState;
    case SearchApiStatusActionType.DESCRIBE_HOUSE_API_SUCCESS:
    default:
      return state;
  }
}
