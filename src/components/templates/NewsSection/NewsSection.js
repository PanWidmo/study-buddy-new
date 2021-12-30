import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import React from 'react';
import { Wrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const NewsSection = () => {
  return (
    <Wrapper>
      <h2>News feed section</h2>
      <ViewWrapper>
        <h3>Title</h3>
        <p>description</p>
        <Button>Click</Button>
      </ViewWrapper>
    </Wrapper>
  );
};

export default NewsSection;
