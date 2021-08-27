import React, { useState } from 'react';

import { DefaultPageWrapper } from '@components';

const HomeContainer = () => {
  const [stage, setStage] = useState(undefined);

  const handleCartClick = () => {
    setStage('cart');
  };

  const handleHomeClick = () => {

  };

  const handleSearchClick = () => {
    setStage('search');
  };

  const handleSignInClick = () => {
    setStage('signIn');
  };

  return (
    <DefaultPageWrapper
      onCartClick={handleCartClick}
      onHomeClick={handleHomeClick}
      onSearchClick={handleSearchClick}
      onSignInClick={handleSignInClick}
    >
      <div>I'm home </div>
    </DefaultPageWrapper>
  );
};

export default HomeContainer;
