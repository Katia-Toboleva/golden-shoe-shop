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
  pageActive,
}) => (
  <Container>
    <Header
      onCartClick={onCartClick}
      onHomeClick={onHomeClick}
      onSearchClick={onSearchClick}
      onSignInClick={onSignInClick}
    />
    <Nav onNavClick={onNavClick} pageActive={pageActive}/>
    <div>
      <div>{children}</div>
    </div>
    {/* <Footer /> */}
  </Container>
);

export default DefaultPageWrapper;
