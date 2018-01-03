/* @flow */

import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../config/redux-events';

export function login(username, password) {
  console.warn('login', `${username}:${password}`);
  return {type: LOGIN_SUCCESS, data: {
      username
  }};
}

export function logout() {
  console.warn('logout');
  return {type: LOGOUT_SUCCESS};
}
