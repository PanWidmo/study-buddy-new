import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAvarage, StyledNameAndAttendance } from './StudentsListItem.styles';
import { UserShape } from 'types';

const StudentsListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <StyledAvarage value={average}>{average}</StyledAvarage>
      <StyledNameAndAttendance>
        <p>
          {name}
          <DeleteButton />
        </p>
        <p>attendance: {attendance}</p>
      </StyledNameAndAttendance>
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
