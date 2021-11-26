import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <h1>Users List</h1>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
