import React from 'react';

import {
  Row,
  Column,
  Container,
  Header,
  Nav,
} from '@components';

const DefaultPageWrapper = ({
  children,
  onSignInClick,
  onSearchClick,
  onHomeClick,
  onCartClick,
  onNavClick,
}) => (
  <Container>
    <Header
      onCartClick={onCartClick}
      onHomeClick={onHomeClick}
      onSearchClick={onSearchClick}
      onSignInClick={onSignInClick}
    />
    <Nav onNavClick={onNavClick} />
    {/* <Main>
      <div>{children}</div>
    </Main> */}
    {/* <Footer /> */}
  </Container>
);

export default DefaultPageWrapper;
