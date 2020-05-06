/* eslint-disable import/no-cycle */

import {
  addObservation,
  deleteObservations,
  fetchObservations,
  resetObservations,
  addObservationToStore,
  changedObservations,
} from './observations';
import { selectDate } from './calendar';
import { setToggleValue, setDetailData, deleteDetailData } from './healthToggle';
import {
  setCompleted,
  setSurveyPage,
  setSurveyPage1,
  setSurveyPage2,
  setSurveyPage3,
  setSurveyPage4,
  clearSurvey,
} from './survey';
import {
  setDemographicsComorbiditiesThunk,
  resetDemographicsComorbidities,
  fetchDemographicsComorbidities,
  setDisclaimerAnswerThunk,
  resetDisclaimerAnswer,
  setSubscribedNumber,
  fetchSubscribedNumber,
  unsubscribeNumber,
  clearResponse,
  setTempUnit,
  fetchTempUnit,
} from './onboarding';
import { deleteUserDataThunk } from './deleteUserData';

const actions = {
  fetchObservations,
  addObservation,
  deleteObservations,
  setDisclaimerAnswerThunk,
  changedObservations,
  setSubscribedNumber,
  fetchSubscribedNumber,
  unsubscribeNumber,
  clearResponse,
  setTempUnit,
  fetchTempUnit,
  selectDate,
  setToggleValue,
  setDetailData,
  deleteDetailData,
  setCompleted,
  setSurveyPage,
  setSurveyPage1,
  setSurveyPage2,
  setSurveyPage3,
  setSurveyPage4,
  clearSurvey,
  setDemographicsComorbiditiesThunk,
  fetchDemographicsComorbidities,
  resetDisclaimerAnswer,
  resetDemographicsComorbidities,
  deleteUserDataThunk,
  resetObservations,
  addObservationToStore,
};

export default actions;
