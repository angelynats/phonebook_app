import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionOperations from './redux/session/sessionOperations';
import ProtectedRoute from './components/ProtectedRoute';

import AppBar from './components/AppBar/AppBar';
import ContactsPage from './pages/ContactsPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionOperations.refreshUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.root}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <ProtectedRoute path="/contacts" redirectTo="/login">
          <ContactsPage />
        </ProtectedRoute>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
