import CONSTANTS from './constants';
import * as api from './api';

const fetchItemsPending = () => ({
  type: CONSTANTS.GET_ITEMS_PENDING,
});

const fetchItemsSuccess = (data) => ({
  type: CONSTANTS.GET_ITEMS_SUCCESS,
  payload: {
    items: data,
  },
});

const fetchItemsRejected = error => ({
  type: CONSTANTS.GET_ITEMS_REJECTED,
  payload: {
    error,
  },
});

export const fetchItems = (payload, category) => (dispatch) => {
  const success = data => {
    dispatch(fetchItemsSuccess(data));
  };

  const rejected = (error) => {
    dispatch(fetchItemsRejected(error));
  };

  dispatch(fetchItemsPending());

  api.fetchItems(payload, category)
    .then(response => response.json())
    .then(success)
    .catch(rejected);
};
