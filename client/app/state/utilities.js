export const createReducer = ({ initialState = {}, atoms = {} }) => (
  state = initialState, action = {},
) => {
  if (typeof atoms[action.type] === 'function') {
    return { ...state, ...atoms[action.type](state, action.payload || {}) || {} };
  }

  return state;
};
