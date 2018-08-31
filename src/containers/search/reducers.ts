import * as React from 'react';
import { Reducer } from 'redux';
import { SearchActionTypes, SearchAction } from './actions';
import { ISearchState, HouseTypeEnum } from './types';
import { locations, facilityOptions } from '../../data/FilterOptions';

const initialState: ISearchState = {
  location: locations[0],
  priceRange: '1500',
  facilities: [facilityOptions[0].id, facilityOptions[1].id],
  houseType: HouseTypeEnum.APARTMENT,
  rawListItems: [],
  filteredResult: []
};

const searchReducer: Reducer<ISearchState> = (state: ISearchState = initialState, action: SearchAction) => {
  switch (action.type) {
    case SearchActionTypes.QUERY_LOCATIONS:
      return {
        ...state,
        location: action.payload.location,
        filteredResult: action.payload.filteredResult
      };
    case SearchActionTypes.FILTER_PRICE:
      return {
        ...state,
        priceRange: action.payload.priceRange,
        filteredResult: action.payload.filteredResult
      };
    case SearchActionTypes.FILTER_FACILITY:
      return {
        ...state, facilities: action.payload.facilities,
        filteredResult: action.payload.filteredResult
      };
    case SearchActionTypes.FILTER_HOUSE_TYPE:
      return {
        ...state,
        houseType: action.payload.houseType,
        filteredResult: action.payload.filteredResult
      };
    default:
      return state;
  }
}

export default searchReducer;