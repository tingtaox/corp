import { Epic, ofType } from 'redux-observable';
import {
  ObservableChainActionTypes,
  ObservableChainAction,
  createObservableChainAction2,
  createObservableChainAction3
} from './actions';
import { mergeMap } from 'rxjs/operators';
import { merge, of, interval } from 'rxjs';

const ObservableChainEpic: Epic<ObservableChainAction, any> = (action$, store) => {
  return action$.pipe(
    ofType(ObservableChainActionTypes.CHAIN_ACTION_1),
    mergeMap((action) => {
      const observable1 = of(createObservableChainAction2());
      const observable2 = of(createObservableChainAction3());
      const observable3 = interval(1000);
      return merge(observable2, observable1, observable3);
    })
  );
}

export default ObservableChainEpic;