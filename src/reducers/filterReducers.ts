import * as React from 'react';
import { Reducer } from 'redux';
import { Checkbox } from '../components/CheckboxList';
import { cloneDeep } from 'lodash';
import {
  SearchActionTypes,
  SearchTypes,
  FilterTypes,
  IFilterAction,
  ISortAction,
  SortTypes
} from '../actions/filterActions';
import { CheckboxListState } from '../components/CheckboxList';
import { ISearchAction } from '../actions/filterActions';
import { RecommendationsContainerState } from '../components/RecommendationsContainer';

export interface FilterOptions {
  cityFilterOptions: CheckboxListState;
  priceFilterOptions: CheckboxListState;
  facilityFilterOptions: CheckboxListState;
  houseTypeFilterOptions: CheckboxListState;
  floorplanFilterOptions: CheckboxListState;
}

export const recommendationPanelReducer: Reducer<RecommendationsContainerState> = (state: RecommendationsContainerState = null, action: ISearchAction) => {
  if (action.type === SearchActionTypes.SEARCH) {
    switch (action.payload.queryType) {
      case SearchTypes.FILTER_COUNTRY:
        return state;
      case SearchTypes.FILTER_CITY:
        return state;
      case SearchTypes.FILTER_SCHOOL:
        return state;
      default:
        return state;
    }
  } else {
    return state;
  }
}

const updateCheckboxStatus = (checkboxes: Checkbox[], id: string | string[]) => {
  return checkboxes.map(checkbox => {
    let item = Object.assign({}, checkbox);
    if (checkbox.id !== id) {
      item.checked = false;
    } else {
      item.checked = true;
    }
    return item;
  });
}

export const filterPanelReducer: Reducer<FilterOptions> = (state: FilterOptions = null, action: IFilterAction) => {
  if (action.type === SearchActionTypes.FILTER) {
    let newState = cloneDeep(state);
    switch (action.payload.filterType) {
      case FilterTypes.FILTER_PRICE:
        const priceFilterOptions = updateCheckboxStatus(
          state.priceFilterOptions.checkboxes,
          action.payload.id
        );
        newState.priceFilterOptions.checkboxes = priceFilterOptions;
        return newState;
      case FilterTypes.FILTER_FACILITY:
        const facilityFilterOptions = updateCheckboxStatus(
          state.facilityFilterOptions.checkboxes,
          action.payload.id
        );
        newState.facilityFilterOptions.checkboxes = facilityFilterOptions;
        return newState;
      case FilterTypes.FILTER_HOUSE_TYPE:
        const houseTypeFilterOptions = updateCheckboxStatus(
          state.houseTypeFilterOptions.checkboxes,
          action.payload.id
        );
        newState.houseTypeFilterOptions.checkboxes = houseTypeFilterOptions;
        return newState;
      case FilterTypes.FILTER_FLOORPLAN:
        const floorplanFilterOptions = updateCheckboxStatus(
          state.floorplanFilterOptions.checkboxes,
          action.payload.id
        );
        newState.floorplanFilterOptions.checkboxes = floorplanFilterOptions;
        return newState;
      default:
        return state;
    }
  } else {
    return state;
  }
}

export const sortResultReducer: Reducer<boolean> = (state: boolean = null, action: ISortAction) => {
  if (action.type === SortTypes.SORT) {
    return action.payload.sortOrder
  } else {
    return state;
  }
}

