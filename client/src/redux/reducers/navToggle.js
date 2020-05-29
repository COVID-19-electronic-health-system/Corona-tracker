import { SET_MORE_TOGGLE } from 'redux/actions/navToggle';

const initialState = {
  moreToggel: false,
};

const navToggle = (oldState = initialState, action) => {
  switch (action.type) {
    case SET_MORE_TOGGLE:
      return {
        ...oldState,
        moreToggel: action.moreToggel,
      };
    default:
      return oldState;
  }
};

export default navToggle;
