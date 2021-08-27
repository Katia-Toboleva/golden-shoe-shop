import React from 'react';

import {
  Row,
  Column,
  Container,
  Header,
} from '@components';

const DefaultPageWrapper = ({
  children,
  handleSignInClick,
  handleSearchClick,
  handleHomeClick,
  handleCartClick,
}) => (
  <Container>
    <Header
      handleCartClick={handleCartClick}
      handleHomeClick={handleHomeClick}
      handleSearchClick={handleSearchClick}
      handleSignInClick={handleSignInClick}
    />
    {/* <Nav /> */}
    {/* <Main>
      <div>{children}</div>
    </Main> */}
    {/* <Footer /> */}
  </Container>
);

export default DefaultPageWrapper;
