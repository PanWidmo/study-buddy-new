import styled from 'styled-components';

export const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 500px;
  padding: 45px 70px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  margin: 25px;
`;
