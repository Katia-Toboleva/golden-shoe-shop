import React from 'react';

import {
  Row,
  Column,
  Container,
  Header,
} from '@components';

const DefaultPageWrapper = ({
  children,
  onSignInClick,
  onSearchClick,
  onHomeClick,
  onCartClick,
}) => (
  <Container>
    <Header
      onCartClick={onCartClick}
      onHomeClick={onHomeClick}
      onSearchClick={onSearchClick}
      onSignInClick={onSignInClick}
    />
    {/* <Nav /> */}
    {/* <Main>
      <div>{children}</div>
    </Main> */}
    {/* <Footer /> */}
  </Container>
);

export default DefaultPageWrapper;
