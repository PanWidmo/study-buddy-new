import React from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content:
      'Amet, diam, viverra nec pretium in nunc a. Amet, diam, viverra nec pretium in nunc a.Amet, diam, viverra nec pretium in nunc a.Amet, diam, viverra nec pretium in nunc a.Amet, diam, viverra nec pretium in nunc a.',
  },
  {
    title: 'New computers at school1',
    category: 'Tech news',
    content:
      'Amet, diam, viverra nec pretium in nunc a. Amet, diam, viverra nec pretium in nunc a.Amet, diam, viverra nec pretium in nunc a.Amet, diam, viverra nec pretium in nunc a.Amet, diam, viverra nec pretium in nunc a.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school2',
    category: 'Tech news',
    content:
      'Amet, diam, viverra nec pretium in nunc a. Amet, diam, viverra nec pretium in nunc a.Amet, diam, viverra nec pretium in nunc a.Amet, diam, viverra nec pretium in nunc a.Amet, diam, viverra nec pretium in nunc a.',
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="article img" /> : null}
          </ContentWrapper>
          <Button isBig>Read more</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
