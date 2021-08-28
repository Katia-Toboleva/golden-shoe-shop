import { reducer as itemReducer } from '../containers/item-container/state';
import { reducer as categoriesReducer } from '../containers/home-container/state';

export default {
  item: itemReducer,
  categories: categoriesReducer,
};
