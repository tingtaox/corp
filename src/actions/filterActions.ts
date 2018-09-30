import * as React from 'react';
import { Action, ActionCreator } from 'redux';

export enum SearchActionTypes {
  SEARCH = '@@search',
  FILTER = '@@filter'
}

export enum SearchTypes {
  FILTER_COUNTRY = '@@search/FILTER_COUNTRY',
  FILTER_CITY = '@@search/FILTER_CITY',
  FILTER_SCHOOL = '@@search/FILTER_SCHOOL'
}

export enum FilterTypes {
  FILTER_PRICE = '@@filter/PRICE_RANGE',
  FILTER_FACILITY = '@@filter/PRICE_RANGE',
  FILTER_HOUSE_TYPE = '@@filter/HOUSE_TYPE',
  FILTER_FLOORPLAN = '@@filter/FLOORPLAN'
}

export enum SortTypes {
  SORT = '@@sort'
}

/** interfaces for actions */
export interface ISearchAction extends Action {
  type: SearchActionTypes.SEARCH,
  payload: {
    queryType: SearchTypes;
    id: string;
  }
}

export interface IFilterAction extends Action {
  type: SearchActionTypes.FILTER,
  payload: {
    filterType: FilterTypes;
    id: string | string[];
  }
}

export interface ISortAction extends Action {
  type: SortTypes.SORT,
  payload: {
    sortOrder: boolean;
  }
}

/** action creators */
export const createSearchAction: ActionCreator<ISearchAction> = (queryType: SearchTypes, id: string) => ({
  type: SearchActionTypes.SEARCH,
  payload: { queryType, id }
})

export const createFilterAction: ActionCreator<IFilterAction> = (filterType: FilterTypes, id: string) => ({
  type: SearchActionTypes.FILTER,
  payload: { filterType, id }
})

export const createSortAction: ActionCreator<ISortAction> = (sortOrder: boolean) => ({
  type: SortTypes.SORT,
  payload: { sortOrder }
})
