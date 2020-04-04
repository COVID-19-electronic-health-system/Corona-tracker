import { SET_TOGGLE_VALUE, SET_DETAIL_DATA } from '../actions/healthToggle';

const initialState = {
  toggleValue: 'myHealthLog',
  detailData: [],
};

const healthToggleReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case SET_TOGGLE_VALUE:
      if (action.toggleValue === 'myHealthLog') {
        return {
          ...oldState,
          toggleValue: 'showMeMore',
        };
      }
      return {
        ...oldState,
        toggleValue: 'myHealthLog',
      };
    case SET_DETAIL_DATA:
      return {
        ...oldState,
        detailData: action.detailData,
      };
    default:
      return oldState;
  }
};

export default healthToggleReducer;
