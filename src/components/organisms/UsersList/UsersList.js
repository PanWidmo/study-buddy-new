import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { AddButton } from 'components/atoms/AddButton/AddButton';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

// const mockAPI = (success) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (usersData) {
//         resolve([...usersData]);
//       } else {
//         reject({ message: 'Error' });
//       }
//     }, 0);
//   });
// };

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  // const [isLoading, setLoadingState] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);

  // useEffect(() => {
  //   setLoadingState(true);
  //   mockAPI()
  //     .then((data) => {
  //       setLoadingState(false);
  //       setUsers(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   console.log('Loading state has changed!');
  // }, [isLoading]);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);

    setFormValues(initialFormState);
  };

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <h1>Add new student</h1>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <AddButton type="submit">Add</AddButton>
      </Wrapper>
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
