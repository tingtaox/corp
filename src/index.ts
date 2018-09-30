import * as React from 'react';
import { Reducer, Action, combineReducers } from 'redux';
import { Epic, combineEpics } from 'redux-observable';
import {
  FilterOptions,
  recommendationPanelReducer,
  filterPanelReducer,
  sortResultReducer
} from './reducers/filterReducers';
import {
  resultListReducer
} from './reducers/resultListReducers';
import {
  fetchHouseListEpic,
  fetchRecCountriesEpic
} from './epics/apiEpics';

import {
  RecommendationsContainerState
} from './components/RecommendationsContainer';

import { RecommendationInputState } from './components/RecommendationInput';
import { HouseCardState } from './components/HouseCard';

export interface ApplicationState {
  recommendationInput?: RecommendationInputState;
  recommendationsPanel?: RecommendationsContainerState;
  filterOptions: FilterOptions;
  houseCards: HouseCardState[];
  sortOrder: boolean;
}

export const applicationReducer: Reducer<ApplicationState> = combineReducers({
  recommendationPanel: recommendationPanelReducer,
  filterOptions: filterPanelReducer,
  houseCards: resultListReducer,
  sortOrder: sortResultReducer
});

export const applicationEpics: Epic<Action, any> = combineEpics(
  fetchHouseListEpic,
  fetchRecCountriesEpic
);
