import CONSTANTS from './constants';
import * as api from './api';

const fetchCategoriesPending = () => ({
  type: CONSTANTS.GET_CATEGORIES_PENDING,
});

const fetchCategoriesSuccess = (data) => ({
  type: CONSTANTS.GET_CATEGORIES_SUCCESS,
  payload: {
    categories: data,
  },
});

const fetchCategoriesRejected = error => ({
  type: CONSTANTS.GET_CATEGORIES_REJECTED,
  payload: {
    error,
  },
});

export const fetchCategories = (payload) => (dispatch) => {
  const success = data => {
    dispatch(fetchCategoriesSuccess(data));
  };

  const rejected = (error) => {
    dispatch(fetchCategoriesRejected(error));
  };

  dispatch(fetchCategoriesPending());

  api.fetchCategories(payload)
    .then(response => response.json())
    .then(success)
    .catch(rejected);
};
