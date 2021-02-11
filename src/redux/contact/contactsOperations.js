import apiInstance from '../../utils/apiInstance/apiInstance';

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

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsStart());
  apiInstance
    .get('/contacts')
    .then(response => {
      dispatch(fetchContactsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchContactsError(error));
    });
};

export const addContact = contact => dispatch => {
  dispatch(addContactStart());
  apiInstance
    .post('/contacts', contact)
    .then(response => {
      dispatch(addContactSuccess(response.data));
    })
    .catch(error => {
      dispatch(addContactError(error));
    });
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactStart());
  apiInstance
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch(error => {
      dispatch(deleteContactError(error));
    });
};

export const editContact = (id, contact) => dispatch => {
  dispatch(editContactStart());
  apiInstance
    .patch(`/contacts/${id}`, contact)
    .then(response => {
      dispatch(editContactSuccess(response.data));
    })
    .catch(error => {
      dispatch(editContactError(error));
    });
};
