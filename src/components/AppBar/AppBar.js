import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionSelectors from '../../redux/session/sessionSelectors';
import * as sessionOperations from '../../redux/session/sessionOperations';

import Navigation from '../Navigation/Navigation';
import UserProfile from '../UserProfile/UserProfile';

const AppBar = () => {
  const user = useSelector(state => sessionSelectors.getUser(state));
  const authenticated = useSelector(state =>
    sessionSelectors.isAuthenticated(state),
  );
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(sessionOperations.logout());
  };
  return (
    <header>
      <Navigation authenticated={authenticated} />
      {authenticated && <UserProfile onLogOut={onLogOut} user={user} />}
    </header>
  );
};

export default AppBar;
