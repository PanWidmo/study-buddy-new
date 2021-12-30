import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border: 1px solid blue;
  display: grid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
`;

export const NewsSectionHeader = styled.h3`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 0;
  width: 100%;
  max-width: unset;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const TitleWrapper = styled.div`
  margin: 0;
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
