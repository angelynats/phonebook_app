import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as contactsOperations from '../../../redux/contact/contactsOperations';
import * as contactsSelectors from '../../../redux/contact/contactsSelectors';
import Modal from '../../Modal/Modal';
import ContactEditor from '../ContactEditor/ContactEditor';
import styles from './Contact.module.css';

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
      <div className={styles.contacts}>
        <p className={styles.contact_name}>{contact.name}</p>
        <p className={styles.contact_number}> {contact.number}</p>
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          onClick={onButtonClick}
          className={styles.button_edit}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDeleteContact(contact.id)}
          className={styles.button_delete}
        >
          Delete
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
  );
};

export default Contact;

Contact.propTypes = {
  uniqueKey: PropTypes.string.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onButtonClick: PropTypes.func,
  onDeleteContact: PropTypes.func,
};
