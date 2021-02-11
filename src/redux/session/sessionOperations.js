import apiInstance from '../../utils/apiInstance/apiInstance';
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

export const login = credentials => dispatch => {
  dispatch(loginRequest());

  apiInstance
    .post('/users/login', credentials)
    .then(response => {
      dispatch(loginSuccess(response.data));
    })
    .catch(error => {
      dispatch(loginError(error));
    });
};

export const signup = credentials => dispatch => {
  dispatch(signupRequest());

  apiInstance
    .post('/users/signup', credentials)
    .then(response => {
      dispatch(signupSuccess(response.data));
    })
    .catch(error => {
      dispatch(signupError(error));
    });
};

export const refreshUser = () => dispatch => {
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }
  dispatch(refreshUserRequest());

  apiInstance
    .get('/users/current')
    .then(response => {
      dispatch(refreshUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(refreshUserError(error));
    });
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch(logOut());
};
