import React from 'react';
import { users } from 'data/users.js';
import UsersListItem from './UsersListItem/UsersListItem';

function UsersList() {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
