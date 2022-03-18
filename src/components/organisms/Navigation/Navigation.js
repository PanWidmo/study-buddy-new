import React from 'react';
import { Wrapper, Logo, StyledLink } from 'components/organisms/Navigation/Navigation.styles';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <Logo>
        <h1>
          Study <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/settings">Settings</StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
