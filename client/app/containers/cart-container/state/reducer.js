import CONSTANTS from './constants';

const defaultState = {
  cart: [],
};

const removeItem = (state) => {
  // TODO: implement logic for removing an Item from the cart.
    let newState;
  
    return newState;
  };

const addItem = (state) => {
// TODO: implement logic for adding Item to the cart.
  let newState;

  return newState;
};

const getCart = (state) => {
// TODO: implement logic for getting the cart.
  let newState;

  return newState;
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD: return addItem(state);
    case CONSTANTS.REMOVE: return removeItem(state);
    case CONSTANTS.GET_CART: return getCart(state);
    default: return state;
  }
};

export default cartReducer;
