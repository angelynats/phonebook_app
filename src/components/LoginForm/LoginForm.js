import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { validateAll } from 'indicative/validator';
import { rulesLogin, messages } from '../../utils/validation';
import * as sessionOperations from '../../redux/session/sessionOperations';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    validateAll({ email, password }, rulesLogin, messages)
      .then(data => {
        dispatch(sessionOperations.login(data));
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
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            autoFocus
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
        LOG IN
      </button>
    </form>
  );
};

export default LoginForm;
