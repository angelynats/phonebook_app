import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as contactsOperations from '../../../redux/contact/contactsOperations';
import * as contactsSelectors from '../../../redux/contact/contactsSelectors';
import Modal from '../../Modal/Modal';
import ContactEditor from '../ContactEditor/ContactEditor';
import styles from './Contact.module.css';

import CreateIcon from '@material-ui/icons/Create';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Contact = ({ uniqueKey }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const contact = useSelector(state =>
    contactsSelectors.getContactById(state, uniqueKey),
  );

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <>
      {contact && (
        <>
          <div className={styles.contacts}>
            <p className={styles.contact_name}>{contact.name}</p>
            <p className={styles.contact_number}>{contact.number}</p>
          </div>
          <div className={styles.buttons}>
            <button
              type="button"
              onClick={onButtonClick}
              className={styles.button_edit}
              title="Edit"
            >
              <CreateIcon className={styles.svg_edit}></CreateIcon>
            </button>
            <button
              type="button"
              onClick={() => onDeleteContact(contact.id)}
              className={styles.button_delete}
              title="Delete"
            >
              <HighlightOffIcon className={styles.svg_del}></HighlightOffIcon>
            </button>
          </div>
          {isModalOpen && (
            <Modal onClose={onButtonClick}>
              <ContactEditor
                onClose={onButtonClick}
                contact={contact}
                titleButton="Edit"
                title="Edit contact"
              />
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default Contact;

Contact.propTypes = {
  uniqueKey: PropTypes.string.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onButtonClick: PropTypes.func,
  onDeleteContact: PropTypes.func,
};
