import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable'
import { ApplicationState, applicationReducer, applicationEpics } from './index';
import { locations, facilityOptions, houses } from './data/FilterOptions';
import { HouseTypeEnum } from './containers/search/types';

const epicMiddleWare = createEpicMiddleware();

const initialState: ApplicationState = {
  search: {
    location: locations[0],
    priceRange: '1500',
    facilities: [facilityOptions[0].id, facilityOptions[1].id],
    houseType: HouseTypeEnum.APARTMENT,
    rawListItems: houses,
    filteredResult: houses
  }
};

export const store = createStore(
  applicationReducer,
  applyMiddleware(epicMiddleWare)
);

epicMiddleWare.run(applicationEpics);