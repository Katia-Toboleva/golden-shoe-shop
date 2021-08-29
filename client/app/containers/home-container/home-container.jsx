import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DefaultPageWrapper, Categories, Spinner } from '@components';

import * as categoriesActions from './state/actions';

const HomeContainer = ({ actions, state }) => {
  const { categories, fetchCategoriesRequestStatus } = state;

  //REMOVE THIS LINE WHEN IMPLEMENTING FETCH
  const itemsInCart = [1,1,1,1,1,1,1,];
  //===========================================

  useEffect(() => {
    actions.fetchCategories();
  }, []);

  return (
    <DefaultPageWrapper
      pageActive="home"
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
