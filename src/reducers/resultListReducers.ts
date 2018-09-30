import { Reducer } from 'redux';
import { cloneDeep } from 'lodash';
import { HouseCardState } from '../components/HouseCard';
import {
  FetchResponseAction,
  ApiResponseAction
} from '../actions/resultListActions';

// reducers
export const resultListReducer: Reducer<HouseCardState[]> = (state: HouseCardState[] = null, action: FetchResponseAction) => {
  let nextState;
  switch (action.type) {
    case ApiResponseAction.ADD_TO_HOUSE_LIST:
      nextState = cloneDeep(state);
      nextState.concat(action.payload);
      return nextState;
    case ApiResponseAction.REPLACE_HOUSE_LIST:
      nextState = cloneDeep(state);
      return nextState;
    default:
      return state;
  }
}
