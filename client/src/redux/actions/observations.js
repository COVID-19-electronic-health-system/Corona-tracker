import Observation from '../../models/observation';
import { SAVING, IDLE, LOADING, CHECKUPS_LOADED } from './actions';

export function saveObservation(observation) {
  return async dispatch => {
    dispatch({ type: SAVING });
    await observation.save();
    dispatch({ type: IDLE });
  };
}

export function loadObservations() {
  return async dispatch => {
    dispatch({ type: LOADING });
    const observations = await Observation.fetchOwnList();
    dispatch({
      type: CHECKUPS_LOADED,
      observations,
    });
    dispatch({ type: IDLE });
  };
}
