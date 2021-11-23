import React from 'react';
import { users } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    mockAPI()
      .then((data) => {
        this.setState({ isLoading: false });
        this.setState({ users: data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(_, prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      console.log('Loading state has changed!');
    }
  }

  componenetDidUnmount() {}

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isLoading ? 'Loading...' : 'Users List'}</h1>
        <StyledList>
          {this.state.users.map((userData, i) => (
            <UsersListItem key={userData.name} userData={userData} deleteUser={this.deleteUser} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
