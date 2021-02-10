import Types from './Types';
import { combineReducers } from 'redux';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case Types.FETCH_CONTACTS_SUCCESS:
      return action.payload.contacts;
    case Types.ADD_CONTACT_SUCCESS:
      if (!action.payload.contact.name || !action.payload.contact.number) {
        return state;
      }
      return [...state, action.payload.contact];
    case Types.EDIT_CONTACT_SUCCESS:
      return state.map(contact =>
        contact.id === action.payload.contact.id
          ? action.payload.contact
          : contact,
      );

    case Types.DELETE_CONTACT_SUCCESS:
      return state.filter(contact => contact.id !== action.payload.id);
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case Types.FETCH_CONTACTS_START:
    case Types.ADD_CONTACT_START:
    case Types.DELETE_CONTACT_START:
    case Types.EDIT_CONTACT_START:
      return true;
    case Types.FETCH_CONTACTS_SUCCESS:
    case Types.ADD_CONTACT_SUCCESS:
    case Types.DELETE_CONTACT_SUCCESS:
    case Types.EDIT_CONTACT_SUCCESS:
    case Types.FETCH_CONTACTS_ERROR:
    case Types.ADD_CONTACT_ERROR:
    case Types.DELETE_CONTACT_ERROR:
    case Types.EDIT_CONTACT_ERROR:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case Types.FETCH_CONTACTS_START:
    case Types.ADD_CONTACT_START:
    case Types.DELETE_CONTACT_START:
    case Types.EDIT_CONTACT_START:
      return null;
    case Types.FETCH_CONTACTS_ERROR:
    case Types.ADD_CONTACT_ERROR:
    case Types.DELETE_CONTACT_ERROR:
    case Types.EDIT_CONTACT_ERROR:
      return action.payload.error;
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case Types.FILTER_CONTACT:
      return action.payload.filter;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
