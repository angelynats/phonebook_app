import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as sessionSelectors from '../../redux/session/sessionSelectors';

import Navigation from '../Navigation/Navigation';
import UserProfile from '../UserProfile/UserProfile';
import styles from './AppBar.module.css';

const AppBar = () => {
  const authenticated = useSelector(state =>
    sessionSelectors.isAuthenticated(state),
  );
  return (
    <header className={styles.header}>
      <Navigation />
      {authenticated && <UserProfile />}
    </header>
  );
};

export default AppBar;

AppBar.propTypes = {
  authenticated: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onLogOut: PropTypes.func,
};
