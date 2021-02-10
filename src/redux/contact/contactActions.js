import Types from './Types';

// FETCH

export const fetchContactsStart = () => ({
  type: Types.FETCH_CONTACTS_START,
});

export const fetchContactsSuccess = contacts => ({
  type: Types.FETCH_CONTACTS_SUCCESS,
  payload: {
    contacts,
  },
});

export const fetchContactsError = error => ({
  type: Types.FETCH_CONTACTS_ERROR,
  payload: {
    error,
  },
});

// ADD

export const addContactStart = () => ({
  type: Types.ADD_CONTACT_START,
});

export const addContactSuccess = contact => ({
  type: Types.ADD_CONTACT_SUCCESS,
  payload: {
    contact,
  },
});

export const addContactError = error => ({
  type: Types.ADD_CONTACT_ERROR,
  payload: {
    error,
  },
});

// DELETE

export const deleteContactStart = () => ({
  type: Types.DELETE_CONTACT_START,
});

export const deleteContactSuccess = id => ({
  type: Types.DELETE_CONTACT_SUCCESS,
  payload: {
    id,
  },
});

export const deleteContactError = error => ({
  type: Types.DELETE_CONTACT_ERROR,
  payload: {
    error,
  },
});

// PATCH

export const editContactStart = () => ({
  type: Types.EDIT_CONTACT_START,
});

export const editContactSuccess = contact => ({
  type: Types.EDIT_CONTACT_SUCCESS,
  payload: {
    contact,
  },
});

export const editContactError = error => ({
  type: Types.EDIT_CONTACT_ERROR,
  payload: {
    error,
  },
});

// FILTER

export const filterContacts = filter => ({
  type: Types.FILTER_CONTACT,
  payload: {
    filter,
  },
});
