import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as contactsOperations from '../../../redux/contact/contactsOperations';
import * as contactsSelectors from '../../../redux/contact/contactsSelectors';
import styles from './ContactList.module.css';

import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(state =>
    contactsSelectors.getContactsWithFilter(state),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {contacts.length === 0 && (
        <div className={styles.empty}>
          <p className={styles.empty_text}>
            Your contact list is empty! Please, add a new contact.
          </p>
        </div>
      )}
      {contacts.length > 0 && (
        <>
          <ul className={styles.list}>
            {contacts.map(contact => (
              <li key={contact.id} className={styles.list_item}>
                <Contact uniqueKey={contact.id} />
              </li>
            ))}
          </ul>
          <p className={styles.total}>Total contacts: {contacts.length}</p>
        </>
      )}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
