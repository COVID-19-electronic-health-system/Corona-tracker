import { loadCheckups, saveCheckup } from './checkups';
export const SAVING = 'SAVING';
export const IDLE = 'IDLE';
export const LOADING = 'LOADING';
export const CHECKUPS_LOADED = 'CHECKUP_LOADED';

const actions = {
  loadCheckups,
  saveCheckup,
};

export default actions;
