import React from 'react';
import { users } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

class UsersList extends React.Component {
  state = {
    isUsersList: true,
  };

  toggleListTitle = () => {
    this.setState((prevState) => ({ isUsersList: !prevState.isUsersList }));
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isUsersList ? `User's list` : `Student's list`}</h1>
        <button onClick={this.toggleListTitle}>Change title</button>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem index={i} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
