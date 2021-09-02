import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Header,
  Nav,
  Footer,
  Chat,
} from '@components';

const DefaultPageWrapper = withRouter(({
  pageActive,
  children,
  history,
}) => {
  const [page, setPageActive] = useState(pageActive);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    let count;
    if (cart.length) {
      count = cart.reduce(
        (acc, currentItem) => acc + Number(currentItem.selectedOptions.quantity), 0,
      );
    } else {
      count = 0;
    }

    setCartItemsCount(count);
  }, [cart, cartItemsCount]);

  const handleCartClick = () => {
    if (!cartItemsCount) {
      history.push('/');
    } else {
      setPageActive('');
      history.push('/cart');
    }
  };

  const handleHomeClick = () => {
    setPageActive('');
    history.push('/');
  };

  const handleSearchClick = () => {
    // Note: further implementation of Search here
  };

  const handleSignInClick = () => {
    // Note: further implementation of Sign in here
  };

  const handleNavClick = (value) => {
    setPageActive(value);
    history.push('/womens');
  };

  const handleFooterClick = (link) => {
    if (link === 'FAQs') {
      history.push('/faq');
    }
  };

  return (
    <>
      <Header
        onCartClick={handleCartClick}
        onHomeClick={handleHomeClick}
        onSearchClick={handleSearchClick}
        onSignInClick={handleSignInClick}
        itemsInCart={cartItemsCount}
      />
      <Nav onNavClick={handleNavClick} pageActive={page} />
      <div>
        <div>{children}</div>
      </div>
      <Footer onFooterClick={handleFooterClick}/>
      <Chat />
    </>
  );
});

export default DefaultPageWrapper;
