import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledNameAndAttendance } from './StudentsListItem.styles';
import { UserShape } from 'types';
import { Average } from 'components/atoms/Average/Average';

const StudentsListItem = ({ userData: { average, name, attendance = '0%' }, ...props }) => {
  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
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
