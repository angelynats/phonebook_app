import React from 'react';

const UserProfile = ({ user, onLogOut }) => {
  return (
    <div>
      <h3>{user.email}</h3>
      <button type="button" color="secondary" onClick={onLogOut}>
        LOG OUT
      </button>
    </div>
  );
};

export default UserProfile;
