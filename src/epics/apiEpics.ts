import { Epic, ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { Action, ActionCreator } from 'redux';
import {
  createFetchHouseListResponseAction,
  createFetchRecCountriesResponseAction
} from '../actions/resultListActions';

// these actions are for epics
export enum ApiRequestAction {
  FETCH_HOUSE_LIST_ACTION = '@@apiRequest/FETCH_HOUSE_LIST_ACTION',
  FETCH_REC_COUNTRIES_ACTION = '@@apiRequest/FETCH_REC_COUNTRIES_ACTION'
}

// actions interfaces
export interface FetchHouseListAction extends Action {
  type: ApiRequestAction.FETCH_HOUSE_LIST_ACTION,
  payload: {
    pageSize: number,
    nextToken: string;
  }
}

export interface FetchRecCountriesAcion extends Action {
  type: ApiRequestAction.FETCH_REC_COUNTRIES_ACTION
}

// actions
export const createFetchHouseListAction: ActionCreator<FetchHouseListAction> = (pageSize?: number, nextToken?: string) => ({
  type: ApiRequestAction.FETCH_HOUSE_LIST_ACTION,
  payload: { pageSize, nextToken }
})

export const createFetchRecCountriesAction: ActionCreator<FetchRecCountriesAcion> = () => ({ type: ApiRequestAction.FETCH_REC_COUNTRIES_ACTION })

// ajax methods
export interface HttpRequestParams {
  url: string;
  pageSize?: number;
  nextToken?: string;
}

const baseUrl = 'http://localhost:3000/';

const ajaxGet = (params: HttpRequestParams) => {
  let url = baseUrl + params.url;
  if (params.pageSize) {
    url += `?pageSize=${params.pageSize}&nextToken=${params.nextToken}`;
  }

  const promise = fetch(url, { mode: 'no-cors' }).then(response => {
    return response.json();
  });
  return from(promise);
}

const api = {
  fetchHouseList: (pageSize: number, nextToken: string) => {
    const params = {
      url: 'api/fetch/houses',
      pageSize,
      nextToken
    };
    return ajaxGet(params);
  },
  fetchRecCountries: () => {
    const params = { url: 'api/fetch/countries' };
    return ajaxGet(params);
  },
  fetchRecCities: () => {
    const params = { url: 'api/fetch/cities' };
    return ajaxGet(params);
  },
  fetchRecSchools: () => {
    const params = { url: 'api/fetch/schools' };
    return ajaxGet(params);
  },
};

export const fetchHouseListEpic: Epic<FetchHouseListAction, any> = action$ =>
  action$.pipe(
    ofType(ApiRequestAction.FETCH_HOUSE_LIST_ACTION),
    switchMap((action: FetchHouseListAction) => {
      const payload = action.payload;
      return api.fetchHouseList(payload.pageSize, payload.nextToken).pipe(
        map(response => createFetchHouseListResponseAction(response))
      );
    })
  )

export const fetchRecCountriesEpic: Epic<FetchRecCountriesAcion, any> = action$ =>
  action$.pipe(
    ofType(ApiRequestAction.FETCH_REC_COUNTRIES_ACTION),
    switchMap((action: FetchRecCountriesAcion) => {
      return api.fetchRecCountries().pipe(
        map(response => createFetchRecCountriesResponseAction(response))
      );
    })
  )
