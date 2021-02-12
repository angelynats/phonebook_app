import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { validateAll } from 'indicative/validator';
import { rulesContact, messages } from '../../../utils/validation';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { formatPhoneNumberIntl } from 'react-phone-number-input';
import * as contactsOperations from '../../../redux/contact/contactsOperations';
import styles from './ContactEditor.module.css';

const ContactEditor = ({ title, titleButton, contact, onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setNumber(contact.number);
    }
  }, [contact]);

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    validateAll({ name, number }, rulesContact, messages)
      .then(data => {
        data.number = formatPhoneNumberIntl(number);
        if (contact) {
          dispatch(contactsOperations.editContact(contact.id, data));
        } else {
          dispatch(contactsOperations.addContact(data));
        }
        onClose();
      })
      .catch(errors => {
        const formattedErrors = {};
        errors.forEach(error => (formattedErrors[error.field] = error.message));
        setErrors(formattedErrors);
      });
  };

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <form onSubmit={onSubmit} className={styles.form} noValidate>
        <div className={styles.inputs}>
          <label htmlFor="name" className={styles.label}>
            Name
            <input
              autoFocus
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className={styles.input}
            />
            {errors && <span className={styles.error}>{errors.name}</span>}
          </label>
          <label htmlFor="number" className={styles.label}>
            Number
            <PhoneInput
              defaultCountry="UA"
              id="number"
              type="text"
              name="number"
              placeholder="+..."
              value={number}
              onChange={setNumber}
              className={styles.input}
            />
            {errors && <span className={styles.error}>{errors.number}</span>}
          </label>

          {/* <label htmlFor="number" className={styles.label}>
            Number
            <input
              id="number"
              type="text"
              name="number"
              value={number}
              onChange={onNumberChange}
              className={styles.input}
            />
            {errors && <span className={styles.error}>{errors.number}</span>}
          </label> */}
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.button_submit}>
            {titleButton}
          </button>
          <button
            type="button"
            onClick={onClose}
            className={styles.button_cancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactEditor;

ContactEditor.propTypes = {
  onClose: PropTypes.func,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  title: PropTypes.string,
  titleButton: PropTypes.string,
};
