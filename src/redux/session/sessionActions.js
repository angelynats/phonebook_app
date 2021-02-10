export const ActionTypes = {
  LOGIN_REQUEST: 'session/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'session/LOGIN_SUCCESS',
  LOGIN_ERROR: 'session/LOGIN_ERROR',
  SIGNUP_REQUEST: 'session/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'session/SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'session/SIGNUP_ERROR',
  LOGOUT: 'session/LOGOUT',
  REFRESH_USER_REQUEST: 'session/REFRESH_USER_REQUEST',
  REFRESH_USER_SUCCESS: 'session/REFRESH_USER_SUCCESS',
  REFRESH_USER_ERROR: 'session/REFRESH_USER_ERROR',
};

// SIGNUP

export const signupRequest = () => ({
  type: ActionTypes.SIGNUP_REQUEST,
});

export const signupSuccess = response => ({
  type: ActionTypes.SIGNUP_SUCCESS,
  payload: { response },
});

export const signupError = error => ({
  type: ActionTypes.SIGNUP_ERROR,
  payload: { error },
});

// LOGIN

export const loginRequest = () => ({
  type: ActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = response => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: { response },
});

export const loginError = error => ({
  type: ActionTypes.LOGIN_ERROR,
  payload: { error },
});

// LOGOUT

export const logOut = () => ({
  type: ActionTypes.LOGOUT,
});

// REFRESH

export const refreshUserRequest = () => ({
  type: ActionTypes.REFRESH_USER_REQUEST,
});

export const refreshUserSuccess = response => ({
  type: ActionTypes.REFRESH_USER_SUCCESS,
  payload: { response },
});

export const refreshUserError = error => ({
  type: ActionTypes.REFRESH_USER_ERROR,
  payload: { error },
});
