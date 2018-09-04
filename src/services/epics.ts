import { Epic, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import apiRequest, {
  HTTP_METHOD
} from './apiRequest';
import {
  SearchApiAction,
  SearchApiActionTypes,
  IListHouseByTagAction,
  IListHouseByZipcodeAction,
  IListHouseApiSuccessAction,
  IDescribeHouseSuccessAction,
  IDescribeHouseAction,
  SearchApiStatusAction,
  SearchApiStatusActionType
} from './actions';

export const listHouseByZipcodeEpic: Epic<SearchApiAction, any> = (action$, store) => {
  return action$.pipe(
    ofType(SearchApiActionTypes.LIST_HOUSE_BY_ZIPZODE),
    switchMap((action: IListHouseByZipcodeAction) => apiRequest({
      actionType: SearchApiStatusActionType.LIST_HOUSE_API_SUCCESS,
      method: HTTP_METHOD.GET,
      url: `/search/${action.payload.zipcode}/zipcode`
    }))
  );
}

export const listHouseByTagEpic: Epic<SearchApiAction, any> = (action$, store) => {
  return action$.pipe(
    ofType(SearchApiActionTypes.LIST_HOUSE_BY_TAG),
    switchMap((action: IListHouseByTagAction) => apiRequest({
      actionType: SearchApiStatusActionType.LIST_HOUSE_API_SUCCESS,
      method: HTTP_METHOD.GET,
      url: `/search/${action.payload.tag}/tag`
    }))
  );
}

export const describeHouseEpic: Epic<SearchApiAction, any> = (action$) => {
  return action$.pipe(
    ofType(SearchApiActionTypes.DESCRIBE_HOUSE),
    switchMap((action: IDescribeHouseAction) => apiRequest({
      actionType: SearchApiStatusActionType.DESCRIBE_HOUSE_API_SUCCESS,
      method: HTTP_METHOD.GET,
      url: `/describe/${action.payload.houseId}/`
    }))
  );
}