import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../../redux/contact/contactsOperations';

// import PropTypes from 'prop-types';

const ContactEditorEdit = ({ contact, onClose }) => {
  const [name, setName] = useState(contact.name);
  const onNameChange = e => {
    setName(e.target.value);
  };

  const [number, setNumber] = useState(contact.number);
  const onNumberChange = e => {
    setNumber(e.target.value);
  };

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(contactsOperations.editContact(contact.id, { name, number }));
    onClose();
  };

  return (
    <>
      <h3> Add a new contact:</h3>
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
        <button type="submit">Edit</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default ContactEditorEdit;
