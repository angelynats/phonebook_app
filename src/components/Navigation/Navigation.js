import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as sessionSelectors from '../../redux/session/sessionSelectors';
import styles from './Navigation.module.css';

const Navigation = () => {
  const authenticated = useSelector(state =>
    sessionSelectors.isAuthenticated(state),
  );
  return (
    <div>
      <div className={styles.nav}>
        {!authenticated && (
          <>
            <NavLink
              to="/"
              exact
              activeClassName={styles.link_activeStyle}
              className={styles.link}
            >
              HOME
            </NavLink>
            <NavLink
              to="/signup"
              activeClassName={styles.link_activeStyle}
              className={styles.link}
            >
              SIGN UP
            </NavLink>

            <NavLink
              to="/login"
              activeClassName={styles.link_activeStyle}
              className={styles.link}
            >
              LOG IN
            </NavLink>
          </>
        )}

        {authenticated && (
          <>
            <NavLink
              to="/contacts"
              activeClassName={styles.link_activeStyle}
              className={styles.link}
            >
              CONTACTS
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;

Navigation.propTypes = {
  authenticated: PropTypes.bool,
};
