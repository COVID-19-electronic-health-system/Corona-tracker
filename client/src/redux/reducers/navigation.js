import { SET_NAVBAR_SECTION } from '../actions/navigation';

const INITIAL_STATE = {
  currentSection: 'log',
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NAVBAR_SECTION:
      return {
        ...state,
        currentSection: action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
