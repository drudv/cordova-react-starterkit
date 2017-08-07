
import 'babel-polyfill';
import { JSDOM } from 'jsdom';

export function setupBrowserMock() {
  const jsdom = new JSDOM('<!DOCTYPE html><html><body></body></html>');

  global.window = jsdom.window;
  global.document = jsdom.window.document;
  global.navigator = window.window.navigator;
}

export function cleanupBrowserMock() {
  global.window.close();

  delete global.navigator;
  delete global.window;
  delete global.document;
}

export function mockedBrowserSuite(name, callback) {
  describe(name, () => {
    before(setupBrowserMock);
    after(cleanupBrowserMock);

    callback();
  });
}
