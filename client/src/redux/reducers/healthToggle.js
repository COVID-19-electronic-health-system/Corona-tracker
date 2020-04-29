import { SET_TOGGLE_VALUE, SET_DETAIL_DATA, DELETE_DETAIL_DATA } from '../actions/healthToggle';

const initialState = {
  toggleValue: 'myHealthLog',
  detailData: [],
};

const healthToggleReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case SET_TOGGLE_VALUE:
      return {
        ...oldState,
        toggleValue: action.toggleValue,
      };
    case SET_DETAIL_DATA:
      return {
        ...oldState,
        detailData: action.detailData,
      };
    case DELETE_DETAIL_DATA:
      return {
        ...oldState,
        detailData: [],
      };
    default:
      return oldState;
  }
};

export default healthToggleReducer;
