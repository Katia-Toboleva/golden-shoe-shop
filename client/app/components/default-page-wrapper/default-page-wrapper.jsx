import React from 'react';

import {
  Row,
  Column,
  Container,
  Header,
  Nav,
  Footer,
} from '@components';

const DefaultPageWrapper = ({
  children,
  onSignInClick,
  onSearchClick,
  onHomeClick,
  onCartClick,
  onNavClick,
  pageActive,
  itemsInCart,
}) => (
  <Container>
    <Header
      onCartClick={onCartClick}
      onHomeClick={onHomeClick}
      onSearchClick={onSearchClick}
      onSignInClick={onSignInClick}
      itemsInCart={itemsInCart}
    />
    <Nav onNavClick={onNavClick} pageActive={pageActive}/>
    <div>
      <div>{children}</div>
    </div>
    <Footer />
  </Container>
);

export default DefaultPageWrapper;
