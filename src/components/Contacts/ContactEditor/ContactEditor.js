import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as contactsOperations from '../../../redux/contact/contactsOperations';

const ContactEditorEdit = ({ title, titleButton, contact, onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setNumber(contact.number);
    }
  }, [contact]);

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onNumberChange = e => {
    setNumber(e.target.value);
  };

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    if (contact) {
      dispatch(contactsOperations.editContact(contact.id, { name, number }));
    } else {
      dispatch(contactsOperations.addContact({ name, number }));
    }
    onClose();
  };

  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          required
          autoFocus
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={onNameChange}
        />
        <label htmlFor="number">Number</label>
        <input
          required
          id="number"
          type="text"
          name="number"
          value={number}
          onChange={onNumberChange}
        />

        <hr></hr>
        <button type="submit">{titleButton}</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default ContactEditorEdit;

ContactEditorEdit.propTypes = {
  onClose: PropTypes.func,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  title: PropTypes.string,
  titleButton: PropTypes.string,
};
