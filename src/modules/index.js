import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";

import * as Users from "../../src/modules/Users/";

export const rootSaga = function* rootSaga() {};

export const reducers = combineReducers({
  users: Users.reducer
});
