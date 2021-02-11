import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import * as contactActions from '../../../redux/contact/contactActions';
import styles from './ContactFilter.module.css';

const ContactFilter = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(contactActions.filterContacts(filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <input
      type="text"
      id="input"
      value={filter}
      onChange={onChangeFilter}
      placeholder="Type to filter contacts..."
      className={styles.input}
    />
  );
};

export default ContactFilter;
