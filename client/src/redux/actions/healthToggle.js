export const SET_TOGGLE_VALUE = 'SET_TOGGLE_VALUE';
export const SET_DETAIL_DATA = 'SET_DETAIL_DATA';
export const DELETE_DETAIL_DATA = 'DELETE_DETAIL_DATA';

export function setToggleValue(toggleValue) {
  return {
    type: SET_TOGGLE_VALUE,
    toggleValue,
  };
}

export function setDetailData(detailData) {
  return {
    type: SET_DETAIL_DATA,
    detailData,
  };
}

export function deleteDetailData() {
  return {
    type: DELETE_DETAIL_DATA,
  };
}
