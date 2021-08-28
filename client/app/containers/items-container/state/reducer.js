import CONSTANTS from './constants';
import { createReducer } from '../../../state/utilities';

const initialState = {
  items: {},
  fetchItemsRequestStatus: null,
};

const getItemsPending = () => ({
  fetchItemsRequestStatus: 'pending',
});

const getItemsSuccess = (state, payload) => ({
  items: payload.items,
  fetchItemsRequestStatus: 'success',
});

const getItemsRejected = () => ({
  fetchItemsRequestStatus: 'rejected',
});

const atoms = {
  [CONSTANTS.GET_ITEMS_PENDING]: getItemsPending,
  [CONSTANTS.GET_ITEMS_SUCCESS]: getItemsSuccess,
  [CONSTANTS.GET_ITEMS_REJECTED]: getItemsRejected,
};

const itemsReducer = createReducer({
  initialState,
  atoms,
});

export default itemsReducer;
