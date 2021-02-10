// import { createSelector } from 'reselect';

export const isAuthenticated = state => state.session.authenticated;

export const getToken = state => state.session.token;

export const getUser = state => state.session.user;

// export const getContactById = createSelector(
//   [(state, id) => id, getContacts],
//   (id, contacts) => contacts.find(contact => contact.id === id),
// );

// export const getContactFilter = state => state.contacts.filter;

// export const getContactsWithFilter = createSelector(
//   [getContacts, getContactFilter],
//   (contacts, filter) => {
//     if (filter !== '') {
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase()),
//       );
//     }
//     return contacts;
//   },
// );
