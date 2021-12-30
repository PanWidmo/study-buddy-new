import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';

const News = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border: 1px solid blue;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <News>
        <p>chuj</p>
        <p>chuj</p>
        <p>chuj</p>
        <p>chuj</p>
      </News>
    </Wrapper>
  );
};

export default MainTemplate;
