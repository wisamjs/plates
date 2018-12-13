import { applyMiddleware, createStore, compose } from 'redux';
import { reducers } from '../modules/';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../modules/';

const sagaMiddleware = createSagaMiddleware();

export default initialState => {
  let middleware = [sagaMiddleware];
  let composeEnhancers = compose;
  const windowObj = this.window || {};

  // Add Redux-logger when building for develop
  if (__DEV__) {
    composeEnhancers =
      windowObj.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    middleware = middleware.concat(logger);
  }

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
