import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  DefaultPageWrapper, Items, Spinner, Filters,
} from '@components';

import * as itemsActions from '../items-container/state/actions';

const WomensContainer = ({ actions, state }) => {
  const { items, fetchItemsRequestStatus } = state;
  const [stage, setStage] = useState(undefined);
  const [pageActive, setPageActive] = useState('women');
  const [womanFilterSelected, setWomanFilterSelected] = useState(undefined);
  const [sizeFilterSelected, setSizeFilterSelected] = useState(undefined);
  const [colorFilterSelected, setColorFilterSelected] = useState(undefined);
  const [priceFilterSelected, setPriceFilterSelected] = useState(undefined);
  const [sortFilterSelected, setSortFilterSelected] = useState(undefined);

  // REMOVE THIS LINE WHEN IMPLEMENTING FETCH
  const itemsInCart = [1, 1, 1, 1, 1, 1, 1];
  //= ==========================================

  useEffect(() => {
    actions.fetchItems('woman');
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
      {fetchItemsRequestStatus === 'rejected' && <div>Error!</div>}
      {fetchItemsRequestStatus === 'pending' && <Spinner />}
      {fetchItemsRequestStatus === 'success' && (
        <Items
          items={items}
        />
      )}
    </DefaultPageWrapper>

  );
};

const mapStateToProps = ({ items }) => ({
  state: items,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(itemsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WomensContainer);
