import React from 'react';
import { NavLink } from 'react-router-dom';
import withAuthRedirect from '../components/hoc/withAuthRedirect';

import SignupForm from '../components/SignupForm/SignupForm';

const SignupPage = () => {
  return (
    <main>
      <div>
        <h1>SIGNUP PAGE</h1>
        <SignupForm />
        or
        <NavLink to="/login">LOGIN</NavLink>
      </div>
    </main>
  );
};

export default withAuthRedirect(SignupPage);
