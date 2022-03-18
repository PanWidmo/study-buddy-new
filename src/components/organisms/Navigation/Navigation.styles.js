import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 2px solid ${({ theme }) => theme.colors.darkPurple};
  grid-row: 1/3;
  grid-column: 1/1;
  padding: 22px 0;
`;

export const Logo = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  padding: 0px 10px 0px 0px;
  margin-bottom: 40px;

  h1 {
    text-align: right;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledLink = styled(NavLink).attrs({ end: 'end' })`
  text-align: right;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  font-weight: bold;
  margin: 15px 30px 15px auto;
  position: relative;
  cursor: pointer;

  &.active {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    content: '';
    position: absolute;
    width: 22px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -30px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
