/* eslint-disable import/no-cycle */

import {
  addObservation,
  deleteObservations,
  fetchObservations,
  resetObservations,
  addObservationToStore,
} from './observations';
import { selectDate } from './calendar';
import { setToggleValue, setDetailData, deleteDetailData } from './healthToggle';
import {
  setSurveyPage1,
  setSurveyPage2,
  setSurveyPage3,
  setSurveyPage4,
  toSurveyPage1,
  toSurveyPage2,
  toSurveyPage3,
  toSurveyPage4,
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
} from './onboarding';
import { deleteUserDataThunk } from './deleteUserData';

const actions = {
  fetchObservations,
  addObservation,
  deleteObservations,
  setDisclaimerAnswerThunk,
  setSubscribedNumber,
  fetchSubscribedNumber,
  unsubscribeNumber,
  clearResponse,
  selectDate,
  setToggleValue,
  setDetailData,
  deleteDetailData,
  setSurveyPage1,
  setSurveyPage2,
  setSurveyPage3,
  setSurveyPage4,
  toSurveyPage1,
  toSurveyPage2,
  toSurveyPage3,
  toSurveyPage4,
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
