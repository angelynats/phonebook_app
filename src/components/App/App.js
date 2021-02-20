import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import * as sessionOperations from '../../redux/session/sessionOperations';
import ProtectedRoute from '../../utils/ProtectedRoute';

import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';
import styles from './App.module.css';

const AsyncHomePage = lazy(() =>
  import('../../pages/HomePage/HomePage' /* webpackChunkName: 'home-page' */),
);

const AsyncLoginPage = lazy(() =>
  import(
    '../../pages/LoginPage/LoginPage' /* webpackChunkName: 'login-page' */
  ),
);

const AsyncSignupPage = lazy(() =>
  import(
    '../../pages/SignupPage/SignupPage' /* webpackChunkName: 'signup-page' */
  ),
);

const AsyncContactsPage = lazy(() =>
  import(
    '../../pages/ContactsPage/ContactsPage' /* webpackChunkName: 'contacts-page' */
  ),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionOperations.refreshUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.root}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <AsyncHomePage />
          </Route>
          <Route path="/signup">
            <AsyncSignupPage />
          </Route>
          <Route path="/login">
            <AsyncLoginPage />
          </Route>
          <ProtectedRoute path="/contacts" redirectTo="/login">
            <AsyncContactsPage />
          </ProtectedRoute>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
