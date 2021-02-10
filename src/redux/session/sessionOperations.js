import axios from 'axios';
import session from './interceptor';

import * as sessionSelectors from './sessionSelectors';
import {
  loginRequest,
  loginSuccess,
  loginError,
  signupRequest,
  signupSuccess,
  signupError,
  refreshUserRequest,
  refreshUserSuccess,
  refreshUserError,
  logOut,
} from './sessionActions';

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// const setAuthToken = token => {
//   axios.defaults.headers.common['Authorization'] = token;
// };

// const clearAuthToken = () => {
//   axios.defaults.headers.common['Authorization'] = null;
// };

export const login = credentials => dispatch => {
  dispatch(loginRequest());

  session
    .post('/users/login', credentials)
    .then(response => {
      // setAuthToken(response.data.token);
      dispatch(loginSuccess(response.data));
    })
    .catch(error => {
      dispatch(loginError(error));
    });
};

export const signup = credentials => dispatch => {
  dispatch(signupRequest());

  session
    .post('/users/signup', credentials)
    .then(response => {
      // setAuthToken(response.data.token);
      dispatch(signupSuccess(response.data));
    })
    .catch(error => {
      dispatch(signupError(error));
    });
};

export const refreshUser = () => (dispatch, getState) => {
  const token = sessionSelectors.getToken(getState());
  if (!token) {
    return;
  }
  // setAuthToken(token);
  dispatch(refreshUserRequest());

  session
    .get('/users/current')
    .then(response => {
      dispatch(refreshUserSuccess(response.data));
    })
    .catch(error => {
      // clearAuthToken();
      dispatch(refreshUserError(error));
    });
};

export const logout = () => dispatch => {
  // clearAuthToken();
  dispatch(logOut());
};
