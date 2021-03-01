import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import fadeTransition from '../../../utils/transitions/fade.module.css';
import PropTypes from 'prop-types';
import * as contactsOperations from '../../../redux/contact/contactsOperations';
import * as contactsSelectors from '../../../redux/contact/contactsSelectors';
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const [list, setList] = useState(true);

  const contactsWithFilter = useSelector(state =>
    contactsSelectors.getContactsWithFilter(state),
  );

  const contacts = useSelector(state => contactsSelectors.getContacts(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CSSTransition
        in={contacts.length === 0}
        key="123"
        timeout={200}
        classNames={fadeTransition}
        unmountOnExit
        onEnter={() => setList(false)}
        onExited={() => setList(true)}
      >
        <div className={styles.empty}>
          <p className={styles.empty_text}>
            Your contact list is empty! Please, add a new contact.
          </p>
        </div>
      </CSSTransition>

      {list && (
        <>
          <TransitionGroup component="ul" className={styles.list}>
            {contactsWithFilter.map(contact => (
              <CSSTransition
                key={contact.id}
                timeout={200}
                classNames={fadeTransition}
                unmountOnExit
              >
                <li className={styles.list_item}>
                  <Contact uniqueKey={contact.id} />
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
          <CSSTransition
            in={contacts.length !== 0}
            key="12345"
            timeout={200}
            classNames={fadeTransition}
            unmountOnExit
          >
            <p className={styles.total}>
              Total contacts: {contactsWithFilter.length}
            </p>
          </CSSTransition>
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
