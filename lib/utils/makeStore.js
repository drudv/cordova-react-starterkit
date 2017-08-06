
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

export default function makeStore(initialState) {
  const middleware = [ReduxThunk];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger({ collapsed: true }));
  }

  return createStore(reducer, initialState, applyMiddleware(...middleware));
}
