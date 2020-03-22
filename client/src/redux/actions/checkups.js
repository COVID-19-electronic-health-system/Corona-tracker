import Checkup from '../../models/checkup';
import { SAVING, IDLE, LOADING, CHECKUPS_LOADED } from './actions';

export function saveCheckup(checkup) {
  return async dispatch => {
    dispatch({ type: SAVING });
    await checkup.save();
    dispatch({ type: IDLE });
  };
}

export function loadCheckups() {
  return async dispatch => {
    dispatch({ type: LOADING });
    const checkups = await Checkup.fetchOwnList();
    dispatch({
      type: CHECKUPS_LOADED,
      checkups,
    });
    dispatch({ type: IDLE });
  };
}
