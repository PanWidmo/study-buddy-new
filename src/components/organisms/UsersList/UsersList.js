import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { AddButton } from 'components/atoms/AddButton/AddButton';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log('Loading state has changed!');
  }, [isLoading]);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <>
      <Wrapper>
        <h1>Add new student</h1>
        <FormField label="Name" id="name" name="name" />
        <FormField label="Attendance" id="attendance" name="attendance" />
        <FormField label="Average" id="average" name="average" />
        <AddButton>Add</AddButton>
      </Wrapper>
      <Wrapper>
        <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
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
