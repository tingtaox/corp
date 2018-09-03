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

export enum ObservableChainActionTypes {
  CHAIN_ACTION_1 = '@@observable/CHAIN_ACTION_1',
  CHAIN_ACTION_2 = '@@observable/CHAIN_ACTION_2',
  CHAIN_ACTION_3 = '@@observable/CHAIN_ACTION_3'
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

export interface IObservableChainAction1 extends Action {
  type: ObservableChainActionTypes.CHAIN_ACTION_1
}

export interface IObservableChainAction2 extends Action {
  type: ObservableChainActionTypes.CHAIN_ACTION_2
}

export interface IObservableChainAction3 extends Action {
  type: ObservableChainActionTypes.CHAIN_ACTION_3
}

export type ObservableChainAction = IObservableChainAction1 | IObservableChainAction2 | IObservableChainAction3;

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

export const createObservableChainAction1: ActionCreator<IObservableChainAction1> = () => ({
  type: ObservableChainActionTypes.CHAIN_ACTION_1
})

export const createObservableChainAction2: ActionCreator<IObservableChainAction2> = () => ({
  type: ObservableChainActionTypes.CHAIN_ACTION_2
})

export const createObservableChainAction3: ActionCreator<IObservableChainAction3> = () => ({
  type: ObservableChainActionTypes.CHAIN_ACTION_3
})