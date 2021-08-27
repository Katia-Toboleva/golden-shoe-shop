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
      handleCartClick={handleCartClick}
      handleHomeClick={handleHomeClick}
      handleSearchClick={handleSearchClick}
      handleSignInClick={handleSignInClick}
    >
      <div>I'm home </div>
    </DefaultPageWrapper>
  );
};

export default HomeContainer;
