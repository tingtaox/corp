import { Action, ActionCreator } from 'redux';
import { HouseDetail } from '../components/HouseDetailTile';

/**
 * Asynchronuous API call invocation actions
*/
export enum SearchApiActionTypes {
  LIST_HOUSE_BY_ZIPZODE = '@@search/LIST_HOUSE_BY_ZIPCODE',
  LIST_HOUSE_BY_TAG = '@@search/LIST_HOUSE_BY_TAG',
  DESCRIBE_HOUSE = '@@describe/DESCRIBE_HOUSE'
}

export interface IListHouseByZipcodeAction extends Action {
  type: SearchApiActionTypes.LIST_HOUSE_BY_ZIPZODE,
  payload: {
    zipcode: string;
  }
}

export interface IListHouseByTagAction extends Action {
  type: SearchApiActionTypes.LIST_HOUSE_BY_TAG,
  payload: {
    tag: string;
  }
}

export interface IDescribeHouseAction extends Action {
  type: SearchApiActionTypes.DESCRIBE_HOUSE,
  payload: {
    houseId: string;
  }
}

export type SearchApiAction = IDescribeHouseAction | IListHouseByTagAction | IListHouseByZipcodeAction;

export const createDescribeHouseAction: ActionCreator<SearchApiAction> = (houseId: string) => ({
  type: SearchApiActionTypes.DESCRIBE_HOUSE,
  payload: { houseId }
})

export const createSearchByZipcodeAction: ActionCreator<SearchApiAction> = (zipcode: string) => ({
  type: SearchApiActionTypes.LIST_HOUSE_BY_ZIPZODE,
  payload: { zipcode }
})

export const createSearchByTagAction: ActionCreator<SearchApiAction> = (tag: string) => ({
  type: SearchApiActionTypes.LIST_HOUSE_BY_TAG,
  payload: { tag }
})

/**
 * API request callback actions
*/
export enum SearchApiStatusActionType {
  LIST_HOUSE_API_SUCCESS = '@@search/LIST_HOUSE_API_SUCCESS',
  DESCRIBE_HOUSE_API_SUCCESS = '@@describe/DESCRIBE_HOUSE_API_SUCCESS',
  SEARCH_API_FAILURE = '@@search/SEARCH_API_FAILURE'
}

export interface IListHouseApiSuccessAction extends Action {
  type: SearchApiStatusActionType.LIST_HOUSE_API_SUCCESS,
  payload: {
    data: HouseDetail[]
  }
}

export interface IDescribeHouseSuccessAction extends Action {
  type: SearchApiStatusActionType.DESCRIBE_HOUSE_API_SUCCESS,
  payload: {
    data: HouseDetail
  }
}

export type SearchApiStatusAction = IListHouseApiSuccessAction | IDescribeHouseSuccessAction;