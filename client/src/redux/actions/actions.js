import { loadObservations, saveObservation } from './observations';
export const SAVING = 'SAVING';
export const IDLE = 'IDLE';
export const LOADING = 'LOADING';
export const CHECKUPS_LOADED = 'CHECKUP_LOADED';

const actions = {
  loadObservations,
  saveObservation,
};

export default actions;
