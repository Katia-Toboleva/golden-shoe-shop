import CONSTANTS from './constants';
import { createReducer } from '../../../state/utilities';

const initialState = {
  categories: {},
  fetchCategoriesRequestStatus: null,
};

const getCategoriesPending = () => ({
  fetchCategoriesRequestStatus: 'pending',
});

const getCategoriesSuccess = (state, payload) => ({
  categories: payload.categories,
  fetchCategoriesRequestStatus: 'success',
});

const getCategoriesRejected = () => ({
  fetchCategoriesRequestStatus: 'rejected',
});

const atoms = {
  [CONSTANTS.GET_CATEGORIES_PENDING]: getCategoriesPending,
  [CONSTANTS.GET_CATEGORIES_SUCCESS]: getCategoriesSuccess,
  [CONSTANTS.GET_CATEGORIES_REJECTED]: getCategoriesRejected,
};

const categoriesReducer = createReducer({
  initialState,
  atoms,
});

export default categoriesReducer;
