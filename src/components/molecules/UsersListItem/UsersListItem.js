import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { Wrapper, StyledAvarage, StyledNameAndAttendance } from './UsersListItem.styles';

const UsersListItem = ({ index, userData: { average, name, attendance = '0%' } }) => {
  const showIndex = (index) => alert(`This is student #${index + 1}`);

  return (
    <Wrapper>
      <StyledAvarage value={average}>{average}</StyledAvarage>
      <StyledNameAndAttendance>
        <p>
          {name}
          <Button onClick={() => showIndex(index)} />
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
