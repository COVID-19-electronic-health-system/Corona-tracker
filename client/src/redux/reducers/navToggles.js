import { SET_MORE_TOGGLE, SET_SETTINGS_TOOGLE } from 'redux/actions/navToggles';

const initialState = {
  moreToggel: false,
  settingsToggle: false,
};

const navToggle = (oldState = initialState, action) => {
  switch (action.type) {
    case SET_MORE_TOGGLE:
      return {
        ...oldState,
        moreToggel: action.moreToggel,
      };
    case SET_SETTINGS_TOOGLE:
      return {
        ...oldState,
        settingsToggle: action.settingsToggle,
      };
    default:
      return oldState;
  }
};

export default navToggle;
