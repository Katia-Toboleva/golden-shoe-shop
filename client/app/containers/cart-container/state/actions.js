import CONSTANTS from './constants';

const addItem = () => ({
  type: CONSTANTS.ADD,
});

const removeItem = () => ({
  type: CONSTANTS.REMOVE,
});

const getCart = () => ({
  type: CONSTANTS.GET_CART,
});

export default {
  addItem,
  removeItem,
  getCart,
};
