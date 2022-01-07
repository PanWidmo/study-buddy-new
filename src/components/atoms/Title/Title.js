import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: 30px;
`;
