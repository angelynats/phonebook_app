import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const activeStyle = {
  color: 'palevioletred',
};

const Navigation = ({ authenticated }) => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/' && (
        <div>
          {!authenticated && (
            <>
              <NavLink to="/" exact activeStyle={activeStyle}>
                HOME
              </NavLink>
              <NavLink to="/signup" activeStyle={activeStyle}>
                SIGN UP
              </NavLink>

              <NavLink to="/login" activeStyle={activeStyle}>
                LOGIN
              </NavLink>
            </>
          )}

          {authenticated && (
            <>
              <NavLink to="/contacts" activeStyle={activeStyle}>
                CONTACTS
              </NavLink>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navigation;
