import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAvarage, StyledNameAndAttendance } from './UsersListItem.styles';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <StyledAvarage value={average}>{average}</StyledAvarage>
      <StyledNameAndAttendance>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledNameAndAttendance>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
