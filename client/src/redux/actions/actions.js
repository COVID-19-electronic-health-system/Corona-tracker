import { loadObservations, saveObservation } from './observations';
import { setLoginLoading } from './login';
export const SAVING = 'SAVING';
export const IDLE = 'IDLE';
export const LOADING = 'LOADING';
export const OBSERVATIONS_LOADED = 'OBSERVATIONS_LOADED';
export const SET_LOGIN_LOADING='SET_LOGIN_LOADING';

const actions = {
  setLoginLoading,
  loadObservations,
  saveObservation,
};

export default actions;
