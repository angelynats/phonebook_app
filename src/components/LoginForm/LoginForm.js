import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionOperations from '../../redux/session/sessionOperations';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sessionOperations.login({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputs}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          required
          autoFocus
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={styles.input}
        />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          required
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>
        LOG IN
      </button>
    </form>
  );
};

export default LoginForm;
