import CONSTANTS from './constants';
import * as api from './api';

const fetchItemPending = () => ({
  type: CONSTANTS.GET_ITEM_PENDING,
});

const fetchItemSuccess = (data) => ({
  type: CONSTANTS.GET_ITEM_SUCCESS,
  payload: {
    item: data,
  },
});

const fetchItemRejected = error => ({
  type: CONSTANTS.GET_ITEM_REJECTED,
  payload: {
    error,
  },
});

export const fetchItem = (payload) => (dispatch) => {
  const success = data => {
    dispatch(fetchItemSuccess(data));
  };

  const rejected = (error) => {
    dispatch(fetchItemRejected(error));
  };

  dispatch(fetchItemPending());

  api.fetchItem(payload)
    .then(response => response.json())
    .then(success)
    .catch(rejected);
};
