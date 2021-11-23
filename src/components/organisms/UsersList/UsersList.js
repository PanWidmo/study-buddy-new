import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

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
  const [users, setUsers] = useState(usersData);
  const [isLoading, setLoadingState] = useState([]);

  // mockAPI()
  //   .then((data) => {
  //     this.setState({ isLoading: false });
  //     this.setState({ users: data });
  //   })
  //   .catch((err) => console.log(err));

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      {/* <h1>{isLoading ? 'Loading...' : 'Users List'}</h1> */}
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
