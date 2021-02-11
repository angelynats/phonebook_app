import { ActionTypes } from './sessionActions';
import { combineReducers } from 'redux';

const userReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.SIGNUP_SUCCESS:
      return payload.response.user;
    case ActionTypes.REFRESH_USER_SUCCESS:
      return payload.response;

    case ActionTypes.LOGOUT:
      return null;

    default:
      return state;
  }
};

const authenticatedReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.SIGNUP_SUCCESS:
    case ActionTypes.REFRESH_USER_SUCCESS:
      return true;
    case ActionTypes.LOGOUT:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_ERROR:
    case ActionTypes.SIGNUP_ERROR:
    case ActionTypes.REFRESH_USER_ERROR:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  error: errorReducer,
  authenticated: authenticatedReducer,
});

// {
//     session: {
//         user: {},
//         error: null,
//     }
// }
