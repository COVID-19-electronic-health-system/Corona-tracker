export const SET_MORE_TOGGLE = 'SET_MORE_TOGGLE';
export const SET_SETTINGS_TOOGLE = 'SET_SETTINGS_TOOGLE';

export function setMoreToogle(moreToggel) {
  return {
    type: SET_MORE_TOGGLE,
    moreToggel,
  };
}

export function setSettingsToggle(settingsToggle) {
  return {
    type: SET_SETTINGS_TOOGLE,
    settingsToggle,
  };
}
