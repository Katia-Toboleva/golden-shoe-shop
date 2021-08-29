import React, { useState } from 'react';

import {
  Container,
  Header,
  Nav,
  Footer,
} from '@components';

const DefaultPageWrapper = ({
  children,
  itemsInCart,
}) => {
  const [pageActive, setPageActive] = useState('home');

  const handleCartClick = () => {

  };

  const handleHomeClick = () => {

  };

  const handleSearchClick = () => {

  };

  const handleSignInClick = () => {

  };

  const handleNavClick = (value) => {
    setPageActive(value);
  };

  return (
    <Container>
      <Header
        onCartClick={handleCartClick}
        onHomeClick={handleHomeClick}
        onSearchClick={handleSearchClick}
        onSignInClick={handleSignInClick}
        itemsInCart={itemsInCart}
      />
      <Nav onNavClick={handleNavClick} pageActive={pageActive} />
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </Container>
  );
};

export default DefaultPageWrapper;
