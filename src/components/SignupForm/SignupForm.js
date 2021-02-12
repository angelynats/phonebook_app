import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { validateAll } from 'indicative/validator';
import { rulesSignup, messages } from '../../utils/validation';
// import PropTypes from 'prop-types';
import * as sessionOperations from '../../redux/session/sessionOperations';
import styles from './SignupForm.module.css';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    validateAll({ name, email, password }, rulesSignup, messages)
      .then(data => {
        dispatch(sessionOperations.signup(data));
      })
      .catch(errors => {
        const formattedErrors = {};
        errors.forEach(error => (formattedErrors[error.field] = error.message));
        setErrors(formattedErrors);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
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

        <label htmlFor="email" className={styles.label}>
          Email
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={styles.input}
          />
          {errors && <span className={styles.error}>{errors.email}</span>}
        </label>

        <label htmlFor="password" className={styles.label}>
          Password
          <input
            required
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={styles.input}
          />
          {errors && <span className={styles.error}>{errors.password}</span>}
        </label>
      </div>
      <button type="submit" className={styles.button}>
        SIGN UP
      </button>
    </form>
  );
};

export default SignupForm;
