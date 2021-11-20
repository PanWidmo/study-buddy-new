import React from 'react';
import { users } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

class UsersList extends React.Component {
  state = {
    users,
  };

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    const { title } = this.props;

    return (
      <Wrapper>
        <h1>{title}</h1>
        <button onClick={this.toggleListTitle}>Change title</button>
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
