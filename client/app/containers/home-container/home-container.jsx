import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DefaultPageWrapper, Categories, Spinner } from '@components';

import * as categoriesActions from './state/actions';

const HomeContainer = ({ actions, state }) => {
  const { categories, fetchCategoriesRequestStatus } = state;
  const [stage, setStage] = useState(undefined);
  const [pageActive, setPageActive] = useState(undefined);

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
    console.log('value received', value);
    setPageActive(value);
  };

  console.log(props, 'PROPSSS');

  return (
    <DefaultPageWrapper
      onCartClick={handleCartClick}
      onHomeClick={handleHomeClick}
      onSearchClick={handleSearchClick}
      onSignInClick={handleSignInClick}
      onNavClick={handleNavClick}
      pageActive={pageActive}
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
