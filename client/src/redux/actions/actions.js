import { loadObservations, saveObservation } from './observations';
export const SAVING = 'SAVING';
export const IDLE = 'IDLE';
export const LOADING = 'LOADING';
export const OBSERVATIONS_LOADED = 'OBSERVATIONS_LOADED';

const actions = {
  loadObservations,
  saveObservation,
};

export default actions;
