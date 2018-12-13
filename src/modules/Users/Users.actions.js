import { createAction } from '../../utils/actions';

export const ATTEMPT_LOGIN = '@@USERS/ATTEMPT_LOGIN';
export const ATTEMPT_LOGIN_SUCCESS = `${ATTEMPT_LOGIN}_SUCCESS`;
export const ATTEMPT_LOGIN_ERROR = `${ATTEMPT_LOGIN}_ERROR`;

export const attemptLogin = payload => createAction(ATTEMPT_LOGIN, payload);
