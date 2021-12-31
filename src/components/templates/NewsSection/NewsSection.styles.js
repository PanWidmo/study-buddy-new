import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 2px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h3`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 10px 0;
  padding: 25px;
  width: 100%;
  max-width: unset;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  img {
    max-width: 200px;
    object-fit: conver;
    margin-left: 15px;
  }
`;
