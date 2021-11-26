import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import PropTypes from 'prop-types';
import { UserShape } from 'types';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <Title>Users List</Title>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
