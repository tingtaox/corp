import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css'

import { SearchHome } from './pages/SearchHome';
import { ZIndex } from './pages/ZIndex';
import { PhoneTool } from './pages/PhoneTool';
import { Counters } from './pages/Counters';
import { Calculator } from './pages/Calculator';

const initialState = {
  count: 4
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'INCREAMENT':
      return { count: state.count + 1 };
    case 'DECREAMENT':
      return { count: state.count - 1 };
    default:
      return state
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Counters />
  </Provider>,
  document.querySelector('body')
);