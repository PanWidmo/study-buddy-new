import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAvarage, StyledNameAndAttendance } from './UsersListItem.styles';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => {
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
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
