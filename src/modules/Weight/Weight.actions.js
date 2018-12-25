import { createAction } from '../../utils/actions';

export const SAVE_WEIGHT = '@@WEIGHT/SAVE_WEIGHT';
export const CLEAR_WEIGHT = '@@WEIGHT/CLEAR_WEIGHT';
export const saveWeight = payload => createAction(SAVE_WEIGHT, payload);
