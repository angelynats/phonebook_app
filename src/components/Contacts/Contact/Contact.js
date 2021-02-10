import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../../redux/contact/contactsOperations';
import * as contactsSelectors from '../../../redux/contact/contactsSelectors';
import Modal from '../../Modal/Modal';
import ContactEditorEdit from '../ContactEditor/ContactEditorEdit';

// import PropTypes from 'prop-types';

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
      <h3>
        {contact.name}: {contact.number}
      </h3>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
      <button type="button" onClick={onButtonClick}>
        Edit
      </button>
      {isModalOpen && (
        <Modal onClose={onButtonClick}>
          <ContactEditorEdit onClose={onButtonClick} contact={contact} />
        </Modal>
      )}
    </>
  );
};

export default Contact;

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
