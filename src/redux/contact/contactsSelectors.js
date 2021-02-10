import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.items;

export const getContactById = createSelector(
  [(state, id) => id, getContacts],
  (id, contacts) => contacts.find(contact => contact.id === id),
);

export const getContactFilter = state => state.contacts.filter;

export const getContactsWithFilter = createSelector(
  [getContacts, getContactFilter],
  (contacts, filter) => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
    return contacts;
  },
);

export const getToken = state => state.session.token;
