import Observation from '../../models/observation';

export const SAVING = 'SAVING';
export const IDLE = 'IDLE';
export const LOADING = 'LOADING';
export const OBSERVATIONS_LOADED = 'OBSERVATIONS_LOADED';
export const NUM_OBSERVATIONS = 'NUM_OBSERVATIONS';

export function saveObservation(observation) {
  return async dispatch => {
    dispatch({ type: SAVING });
    await observation.save();
    dispatch({ type: IDLE });
  };
}

export function setNumObservations(numObservations) {
  return {
    type: NUM_OBSERVATIONS,
    numObservations,
  };
}

export function loadObservations() {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING });
    const { observations: currentObservations } = getState();
    const observations = await Observation.fetchOwnList();
    const newObservations = observations.filter(o => currentObservations.indexOf(o) < 0);
    dispatch({
      type: OBSERVATIONS_LOADED,
      observations: [...currentObservations, ...newObservations],
    });
    dispatch({ type: IDLE });
  };
}
