export const SET_MORE_TOGGLE = 'SET_MORE_TOGGLE';
export const SET_SETTINGS_TOOGLE = 'SET_SETTINGS_TOOGLE';

export function setMoreToggle(moreToggle) {
  return {
    type: SET_MORE_TOGGLE,
    moreToggle,
  };
}

export function setSettingsToggle(settingsToggle) {
  return {
    type: SET_SETTINGS_TOOGLE,
    settingsToggle,
  };
}
