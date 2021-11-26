import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const Logo = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  padding: 0px 10px 0px 60px;
  margin-bottom: 40px;

  h1 {
    text-align: right;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledLink = styled(Link)`
  text-align: right;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  font-weight: bold;
  margin: 15px 30px 15px auto;
`;
