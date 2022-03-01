import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1%;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledNameAndAttendance = styled.div`
  margin: 0 10px;
  padding: 30px 10px;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0;
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
