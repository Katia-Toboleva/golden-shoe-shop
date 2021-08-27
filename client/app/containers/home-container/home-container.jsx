import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DefaultPageWrapper, Categories, Spinner } from '@components';

import * as categoriesActions from './state/actions';

const HomeContainer = ({ actions, state }) => {
  const { categories, fetchCategoriesRequestStatus } = state;
  const [stage, setStage] = useState(undefined);
  const [pageActive, setPageActive] = useState(undefined);

  //REMOVE THIS LINE WHEN IMPLEMENTING FETCH
  const itemsInCart = [];
  //===========================================

  useEffect(() => {
    actions.fetchCategories();
  }, []);

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

  const handleNavClick = (value) => {
    setPageActive(value);
  };

  return (
    <DefaultPageWrapper
      onCartClick={handleCartClick}
      onHomeClick={handleHomeClick}
      onSearchClick={handleSearchClick}
      onSignInClick={handleSignInClick}
      onNavClick={handleNavClick}
      pageActive={pageActive}
      itemsInCart={itemsInCart}
    >
      {fetchCategoriesRequestStatus === 'rejected' && <div>Error!</div>}
      {fetchCategoriesRequestStatus === 'pending' && <Spinner />}
      {fetchCategoriesRequestStatus === 'success' && (
        <Categories
          categories={categories}
        />
      )}
    </DefaultPageWrapper>

  );
};

const mapStateToProps = ({ categories }) => ({
  state: categories,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(categoriesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
