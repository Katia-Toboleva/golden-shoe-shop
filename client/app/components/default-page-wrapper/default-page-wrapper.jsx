import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Container,
  Header,
  Nav,
  Footer,
} from '@components';

const DefaultPageWrapper = withRouter(({
  children,
  history,
}) => {
  const [pageActive, setPageActive] = useState('home');
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const cart =  JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    setCartItemsCount(cart.length);
  }, [cart, cartItemsCount]);

  const handleCartClick = () => {
    setPageActive('');
    history.push('/cart');
  };

  const handleHomeClick = () => {
    setPageActive('');
    history.push('/');
  };

  const handleSearchClick = () => {

  };

  const handleSignInClick = () => {

  };

  const handleNavClick = (value) => {
    setPageActive(value);
    history.push('/womens');
  };

  return (
    <Container>
      <Header
        onCartClick={handleCartClick}
        onHomeClick={handleHomeClick}
        onSearchClick={handleSearchClick}
        onSignInClick={handleSignInClick}
        itemsInCart={cartItemsCount}
      />
      <Nav onNavClick={handleNavClick} pageActive={pageActive} />
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </Container>
  );
});

export default DefaultPageWrapper;
