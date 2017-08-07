import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import makeStore from './utils/makeStore';
import * as ActionCreators from './actions';

const store = makeStore(window.__INITIAL_STATE__);

document.addEventListener(
  'deviceready', () => { store.dispatch(ActionCreators.setDeviceReady()) }
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
