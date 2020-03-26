import { loadObservations, saveObservation } from './observations';
import { setLoginLoading } from './login';
import { setNavbarSection } from './navigation'
import { setDisclaimer } from './disclaimer'
export const SAVING = 'SAVING';
export const IDLE = 'IDLE';
export const LOADING = 'LOADING';
export const OBSERVATIONS_LOADED = 'OBSERVATIONS_LOADED';
export const SET_LOGIN_LOADING='SET_LOGIN_LOADING';
export const SET_NAVBAR_SECTION='SET_NAVBAR_SECTION';
export const SET_DISCLAIMER_MODAL= 'SET_DISCLAIMER_MODAL';

const actions = {
  setLoginLoading,
  loadObservations,
  saveObservation,
  setNavbarSection,
  setDisclaimer
};

export default actions;
