import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';
import styled from 'styled-components';

const Avarage = styled.div`
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  padding: 8px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

const NameAndAttendance = styled.div`
  margin: 0 10px;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Attendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <Avarage value={average}>{average}</Avarage>
      <NameAndAttendance>
        <Name>{name}</Name>
        <Attendance>attendance: {attendance}</Attendance>
      </NameAndAttendance>
      <Button />
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
