import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ons from 'onsenui';
import App from './containers/App';
import makeStore from './utils/makeStore';
import * as ActionCreators from './actions';

import 'onsenui/css/onsenui.css';
import './styles/onsen-css-components.css';

const store = makeStore(window.__INITIAL_STATE__);

ons.ready(function() {
  if (window.MobileAccessibility) {
    // disable font zooming
    // @see https://stackoverflow.com/questions/15194940/phonegap-application-text-and-layout-too-small
    window.MobileAccessibility.usePreferredTextZoom(false);
  }

  const loadingScreen = document.getElementById('loading');
  loadingScreen.parentNode.removeChild(loadingScreen);

  store.dispatch(ActionCreators.setDeviceReady());
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});
