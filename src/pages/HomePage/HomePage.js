import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.css';

import withAuthRedirect from '../../utils/hoc/withAuthRedirect';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.home_page}>
        <h1 className={styles.visually_hidden}>Phonebook</h1>
        <p className={styles.header_main}>Welcome to the</p>
        <p className={styles.header_main_app}>Phonebook-App!</p>
        <p className={styles.header_secondary}>To start, please:</p>
        <NavLink to="/login" className={styles.link_login}>
          LOGIN
        </NavLink>
        <p className={styles.header_secondary}>or</p>
        <NavLink to="/signup" className={styles.link_signup}>
          SIGN UP
        </NavLink>
      </div>
    </main>
  );
};

export default withAuthRedirect(HomePage);
