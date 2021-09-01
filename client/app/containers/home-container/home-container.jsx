import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DefaultPageWrapper, Categories, Spinner } from '@components';

import * as categoriesActions from './state/actions';

const HomeContainer = ({ actions, state }) => {
  const { categories, fetchCategoriesRequestStatus } = state;
  const history = useHistory();

  useEffect(() => {
    actions.fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    if (category === 'womens') {
      history.push('/womens');
    }
  };

  return (
    <DefaultPageWrapper>
      {fetchCategoriesRequestStatus === 'rejected' && <div>Error!</div>}
      {fetchCategoriesRequestStatus === 'pending' && <Spinner />}
      {fetchCategoriesRequestStatus === 'success' && (
        <Categories
          categories={categories}
          onClick={handleCategoryClick}
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
