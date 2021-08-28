import { reducer as itemReducer } from '../containers/item-container/state';
import { reducer as categoriesReducer } from '../containers/home-container/state';
import { reducer as cartReducer } from '../containers/cart-container/state';
import { reducer as itemsReducer } from '../containers/items-container/state';

export default {
  item: itemReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  items: itemsReducer,
};
