import * as React from 'react';
import { Action, ActionCreator } from 'redux';
import { HouseTypeEnum, IHouseType } from './types';
import { ISearchBarOption } from '../../components/SearchBar';
import { HouseDetail } from '../../components/HouseDetailTile';

export enum SearchActionTypes {
  QUERY_LOCATIONS = '@@search/QUERY_LOCATIONS',
  FILTER_PRICE = '@@filter/FILTER_PRICE',
  FILTER_FACILITY = '@@filter/FILTER_FACILITY',
  FILTER_HOUSE_TYPE = '@@filter/FILTER_HOUSE_TYPE'
}

/** interfaces for actions */
export interface IQueryLocationAction extends Action {
  type: SearchActionTypes.QUERY_LOCATIONS,
  payload: {
    location: ISearchBarOption;
    filteredResult: HouseDetail[];
  }
}

export interface IFilterPriceAction extends Action {
  type: SearchActionTypes.FILTER_PRICE,
  payload: {
    priceRange: string;
    filteredResult: HouseDetail[];
  }
}

export interface IFilterFacilityAction extends Action {
  type: SearchActionTypes.FILTER_FACILITY,
  payload: {
    facilities: string[];
    filteredResult: HouseDetail[];
  }
}

export interface IFilterHouseTypeAction extends Action {
  type: SearchActionTypes.FILTER_HOUSE_TYPE,
  payload: {
    houseType: HouseTypeEnum,
    filteredResult: HouseDetail[];
  }
}

export type SearchAction = IQueryLocationAction | IFilterPriceAction | IFilterFacilityAction | IFilterHouseTypeAction;

/** action creators */
export const createQueryLocationAction: ActionCreator<IQueryLocationAction> = (location: ISearchBarOption, filteredResult: HouseDetail[]) => ({
  type: SearchActionTypes.QUERY_LOCATIONS,
  payload: { location, filteredResult }
})

export const createFilterPriceAction: ActionCreator<IFilterPriceAction> = (priceRange: string,  filteredResult: HouseDetail[]) => ({
  type: SearchActionTypes.FILTER_PRICE,
  payload: { priceRange, filteredResult }
})

export const createFilterFacilityAction: ActionCreator<IFilterFacilityAction> = (facilities: string[], filteredResult: HouseDetail[]) => ({
  type: SearchActionTypes.FILTER_FACILITY,
  payload: { facilities, filteredResult }
})

export const createFilterHouseTypeAction: ActionCreator<IFilterHouseTypeAction> = (houseType: HouseTypeEnum, filteredResult: HouseDetail[]) => ({
  type: SearchActionTypes.FILTER_HOUSE_TYPE,
  payload: { houseType, filteredResult }
})
