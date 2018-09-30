import { Action, ActionCreator } from 'redux';
import { HouseCardState } from '../components/HouseCard';

export enum ApiResponseAction {
  ADD_TO_HOUSE_LIST = '@@apiResponse/ADD_TO_HOUSE_LIST',
  REPLACE_HOUSE_LIST = '@@apiResponse/REPLACE_HOUSE_LIST'
}

export interface FetchHouseListResponseAction extends Action {
  type: ApiResponseAction.ADD_TO_HOUSE_LIST,
  payload: HouseCardState[];
}

export interface FetchRecCountriesResponseAction extends Action {
  type: ApiResponseAction.REPLACE_HOUSE_LIST,
  payload: HouseCardState[];
}

export const createFetchHouseListResponseAction: ActionCreator<FetchHouseListResponseAction> = (payload: any) => ({
  type: ApiResponseAction.ADD_TO_HOUSE_LIST,
  payload
})

export const createFetchRecCountriesResponseAction: ActionCreator<FetchRecCountriesResponseAction> = (payload) => ({
  type: ApiResponseAction.REPLACE_HOUSE_LIST,
  payload
})

export type FetchResponseAction =
  FetchHouseListResponseAction |
  FetchRecCountriesResponseAction;

