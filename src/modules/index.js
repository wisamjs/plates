import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import * as Weight from '../../src/modules/Weight/';
import * as Navigation from '../../src/modules/Navigation/';
export const rootSaga = function* rootSaga() {
  yield all([fork(Navigation.saga)]);
};

export const reducers = combineReducers({
  weight: Weight.reducer,
});
