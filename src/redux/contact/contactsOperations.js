import axios from 'axios';
import * as contactsSelectors from './contactsSelectors';

import {
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsError,
  addContactStart,
  addContactSuccess,
  addContactError,
  deleteContactStart,
  deleteContactSuccess,
  deleteContactError,
  editContactStart,
  editContactSuccess,
  editContactError,
} from './contactActions';

// axios.defaults.baseURL = 'http://localhost:4040';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

export const fetchContacts = () => (dispatch, getState) => {
  const token = contactsSelectors.getToken(getState());
  setAuthToken(token);

  dispatch(fetchContactsStart());
  axios
    .get('/contacts')
    .then(response => {
      dispatch(fetchContactsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchContactsError(error));
    });
};

export const addContact = contact => (dispatch, getState) => {
  const token = contactsSelectors.getToken(getState());
  setAuthToken(token);

  dispatch(addContactStart());
  axios
    .post('/contacts', contact)
    .then(response => {
      dispatch(addContactSuccess(response.data));
    })
    .catch(error => {
      dispatch(addContactError(error));
    });
};

export const deleteContact = id => (dispatch, getState) => {
  const token = contactsSelectors.getToken(getState());
  setAuthToken(token);

  dispatch(deleteContactStart());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch(error => {
      dispatch(deleteContactError(error));
    });
};

export const editContact = (id, contact) => (dispatch, getState) => {
  const token = contactsSelectors.getToken(getState());
  setAuthToken(token);

  dispatch(editContactStart());
  axios
    .patch(`/contacts/${id}`, contact)
    .then(response => {
      dispatch(editContactSuccess(response.data));
    })
    .catch(error => {
      dispatch(editContactError(error));
    });
};
