import { loadObservations, saveObservation } from './observations';
import { setLoginLoading } from './login';
import { setNavbarSection } from './navigation';
<<<<<<< HEAD
import { setDisclaimerAnswerThunk } from './disclaimer';
import { selectDate } from './calendar'
=======
import { setDisclaimerAnswer } from './disclaimer';
import { selectDate } from './calendar'
export const SAVING = 'SAVING';
export const IDLE = 'IDLE';
export const LOADING = 'LOADING';
export const OBSERVATIONS_LOADED = 'OBSERVATIONS_LOADED';
export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING';
export const SET_NAVBAR_SECTION = 'SET_NAVBAR_SECTION';
export const DISCLAIMER_ANSWER = 'DISCLAIMER_ANSWER';
export const SELECT_DATE = 'DATE_LOAD'
>>>>>>> Created redux action for selecting date from the calendar

const actions = {
  setLoginLoading,
  loadObservations,
  saveObservation,
  setNavbarSection,
<<<<<<< HEAD
  setDisclaimerAnswerThunk,
=======
  setDisclaimerAnswer,
>>>>>>> Created redux action for selecting date from the calendar
  selectDate,
};

export default actions;