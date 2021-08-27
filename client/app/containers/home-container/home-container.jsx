import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DefaultPageWrapper, Categories } from '@components';

import * as actions from './state/actions';

const HomeContainer = (props) => {
  const [stage, setStage] = useState(undefined);
  const [pageActive, setPageActive] = useState(undefined);

  useEffect(() => {
    props.actions.fetchCategories();
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
    console.log('value received', value)
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
      <Categories />
    </DefaultPageWrapper>
  );
};

const mapStateToProps = ({ categories }) => ({
  state: categories,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
