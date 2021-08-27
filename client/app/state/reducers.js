import { reducer as viewItemReducer } from '../containers/view-item-container/state';
import { reducer as categoriesReducer } from '../containers/home-container/state';

export default {
  viewItem: viewItemReducer,
  categories: categoriesReducer,
};
