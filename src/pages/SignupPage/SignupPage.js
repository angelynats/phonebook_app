import React from 'react';
import { NavLink } from 'react-router-dom';
import withAuthRedirect from '../../utils/hoc/withAuthRedirect';

import SignupForm from '../../components/SignupForm/SignupForm';
import styles from './SignupPage.module.css';

const SignupPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_signup}>
        <h1 className={styles.header}>SIGN UP</h1>
        <SignupForm />
        <p className={styles.header_secondary}>or</p>
        <NavLink to="/login" className={styles.link}>
          LOG IN
        </NavLink>
      </div>
    </main>
  );
};

export default withAuthRedirect(SignupPage);
