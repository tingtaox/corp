import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { store } from './configureStore';

import SearchHome from './containers/search/SearchHome';

ReactDOM.render(
  <Provider store={store}>
    <SearchHome />
  </Provider>,
  document.querySelector('body')
);