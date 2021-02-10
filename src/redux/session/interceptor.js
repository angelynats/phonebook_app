import axios from 'axios';
import * as sessionSelectors from './sessionSelectors';
import * as sessionOperations from './sessionOperations';
import { store } from '../store';

const session = axios.create({
  baseURL: 'https://goit-phonebook-api.herokuapp.com',
  headers: { Authorization: null },
});

session.interceptors.request.use(
  config => {
    const token = sessionSelectors.getToken(store.getState());
    console.log(token);
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

session.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      // router.history.push('/auth/login');
      store.dispatch(sessionOperations.logout());
    }
    return Promise.reject(error);
  },
);

export default session;
