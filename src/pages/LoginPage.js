import React from 'react';
import { NavLink } from 'react-router-dom';

import withAuthRedirect from '../components/hoc/withAuthRedirect';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <main>
      <div>
        <h1>LOGIN PAGE</h1>
        <LoginForm />
        or
        <NavLink to="/signup">SIGN UP</NavLink>
      </div>
    </main>
  );
};

export default withAuthRedirect(LoginPage);
