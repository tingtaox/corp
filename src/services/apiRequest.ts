import 'isomorphic-fetch';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export enum HTTP_METHOD {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  DELETE = 'delete'
};

export interface ApiRequestParams {
  actionType: any;
  method: HTTP_METHOD;
  url: string;
  params?: any;
}

export const apiRequest = (requestParams: ApiRequestParams): Observable<any> => {
  const { actionType, method, url, params } = requestParams;

  let observable: Observable<any>;
  switch (method) {
    case HTTP_METHOD.GET:
      observable = ajaxRequeset(url, HTTP_METHOD.GET);
      break;
    case HTTP_METHOD.POST:
      observable = ajaxRequeset(url, HTTP_METHOD.POST, params);
      break;
    case HTTP_METHOD.DELETE:
      observable = ajaxRequeset(url, HTTP_METHOD.DELETE);
  }

  return observable.pipe(
    switchMap((data: any) => {
      const action = {
        type: actionType,
        data
      };
      return of(action);
    }, (err) => { of({ type: actionType, data: err }) }
    ));
}

const ajaxRequeset = (url: string, method: HTTP_METHOD, params?: any) => {
  let data: RequestInit = {
    method: method.toString(),
    headers: { 'Content-Type': 'application/json' }
  };
  data.body = params && JSON.stringify(params);

  return buildRequestObservable(fetch(url, data));
}

const buildRequestObservable = (fetch: any): Observable<any> => {
  const promise = new Promise((resolve, reject) => {
    fetch.then((response: any) => {
      if (!response.ok) {
        reject();
      }

      response.json().then((data: any) => {
        resolve(data);
      }, (err: any) => {
        reject(err);
      });
    }).catch((err: any) => { reject(err) });
  });
  return from(promise);
}

export default apiRequest;