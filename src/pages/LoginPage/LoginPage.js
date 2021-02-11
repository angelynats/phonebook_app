import React from 'react';
import { NavLink } from 'react-router-dom';
import withAuthRedirect from '../../utils/hoc/withAuthRedirect';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_login}>
        <h1 className={styles.header}>LOG IN</h1>
        <LoginForm />
        <p className={styles.header_secondary}>or</p>
        <NavLink to="/signup" className={styles.link}>
          SIGN UP
        </NavLink>
      </div>
    </main>
  );
};

export default withAuthRedirect(LoginPage);
