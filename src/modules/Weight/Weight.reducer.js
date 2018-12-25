import * as actions from './Weight.actions';
import R from 'ramda';

export const INITIAL_STATE = {
  plates: {
    lb: [45, 35, 25, 10, 5, 2.5],
    kg: [25, 20, 15, 10, 5, 2.5, 2, 1.5, 1, 0.5],
  },
  selectedLb: 250,
};

export default function weight(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case actions.SAVE_WEIGHT:
      return R.assocPath(['selectedLb'], Number(action.payload), state);
    case actions.CLEAR_WEIGHT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
