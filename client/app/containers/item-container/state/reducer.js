import CONSTANTS from './constants';
import { createReducer } from '../../../state/utilities';

const initialState = {
  item: {},
  fetchItemRequestStatus: null,
  fetchModifyRequestStatus: null,
  fetchDeleteItemRequestStatus: null,
};

const getItemPending = () => ({
  fetchItemRequestStatus: 'pending',
});

const getItemSuccess = (state, payload) => ({
  item: payload.item,
  fetchItemRequestStatus: 'success',
});

const getItemRejected = () => ({
  fetchItemRequestStatus: 'rejected',
});

const atoms = {
  [CONSTANTS.GET_ITEM_PENDING]: getItemPending,
  [CONSTANTS.GET_ITEM_SUCCESS]: getItemSuccess,
  [CONSTANTS.GET_ITEM_REJECTED]: getItemRejected,
};

const itemReducer = createReducer({
  initialState,
  atoms,
});

export default itemReducer;
