export const SAVING = 'SAVING';
export const IDLE = 'IDLE';
export const LOADING = 'LOADING';
export const OBSERVATIONS_LOADED = 'OBSERVATIONS_LOADED';
export const NUM_OBSERVATIONS = 'NUM_OBSERVATIONS';

export function setNumObservations(numObservations) {
  return {
    type: NUM_OBSERVATIONS,
    numObservations,
  };
}
