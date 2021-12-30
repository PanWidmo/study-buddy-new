import React from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>Uniwersity news feed</NewsSectionHeader>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>New computers for all lectures</h3>
          <p>Staff news</p>
        </TitleWrapper>
        <p>
          Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam. In
          turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium
          hendrerit quis egestas eget at magna ac commodo volutpat.
        </p>
        <Button isBig>Read more</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default NewsSection;
