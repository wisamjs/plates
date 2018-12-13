import * as actions from "./Users.actions";

export const INITIAL_STATE = { all: {} };

export default function clients(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case actions.ATTEMPT_LOGIN_SUCCESS:
      return state;
    default:
      return state;
  }
}
