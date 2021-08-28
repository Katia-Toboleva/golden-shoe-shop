import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DefaultPageWrapper, Categories, Spinner, Filters } from '@components';

import * as categoriesActions from './state/actions';

const WomensContainer = ({ actions, state }) => {
  const { categories, fetchCategoriesRequestStatus } = state;
  const [stage, setStage] = useState(undefined);
  const [pageActive, setPageActive] = useState('women');
  const [womanFilterSelected, setWomanFilterSelected] = useState(undefined);
  const [sizeFilterSelected, setSizeFilterSelected] = useState(undefined);
  const [colorFilterSelected, setColorFilterSelected] = useState(undefined);
  const [priceFilterSelected, setPriceFilterSelected] = useState(undefined);
  const [sortFilterSelected, setSortFilterSelected] = useState(undefined);

  //REMOVE THIS LINE WHEN IMPLEMENTING FETCH
  const itemsInCart = [1,1,1,1,1,1,1,];
  //===========================================

  console.log('page', pageActive)

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

  const handleItemClick = (value, label) => {
    if (label === 'women') {
      setWomanFilterSelected(value);
    }
    if (label === 'size') {
      setSizeFilterSelected(value);
    }
    if (label === 'colour') {
      setColorFilterSelected(value);
    }
    if (label === 'price') {
      setPriceFilterSelected(value);
    }
    if (label === 'sort') {
      setSortFilterSelected(value);
    }
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
      <Filters
        onItemClick={handleItemClick}
        womanFilterSelected={womanFilterSelected}
        sizeFilterSelected={sizeFilterSelected}
        colorFilterSelected={colorFilterSelected}
        priceFilterSelected={priceFilterSelected}
        sortFilterSelected={sortFilterSelected}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(WomensContainer);
