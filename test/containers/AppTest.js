import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'lib/containers/App';
import makeStore from 'lib/utils/makeStore';
import { mockedBrowserSuite } from 'test/setup';

mockedBrowserSuite('App', () => {

  beforeEach(() => {
    global.document.body.innerHTML = '<div id="app"></div>';
  });

  it('renders without errors', () => {
    const testRender = () => {
      const store = makeStore();
      const container = global.document.getElementById('app');
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        container
      );
    };
    expect(testRender).to.not.throw();
  })
});
