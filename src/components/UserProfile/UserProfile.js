import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as sessionOperations from '../../redux/session/sessionOperations';
import * as sessionSelectors from '../../redux/session/sessionSelectors';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const user = useSelector(state => sessionSelectors.getUser(state));
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(sessionOperations.logout());
  };

  return (
    <div className={styles.profile}>
      <h3 className={styles.name}>{user.name}</h3>
      <button type="button" onClick={onLogOut} className={styles.button}>
        LOG OUT
      </button>
    </div>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onLogOut: PropTypes.func,
};
