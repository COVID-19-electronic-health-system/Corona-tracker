/* eslint-disable import/no-cycle */

import {
  addObservation,
  deleteObservations,
  fetchObservations,
  resetObservations,
  addObservationToStore,
} from './observations';
import { setLoginLoading } from './login';
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
} from './onboarding';
import { deleteUserDataThunk } from './deleteUserData';

const actions = {
  setLoginLoading,
  fetchObservations,
  addObservation,
  deleteObservations,
  setDisclaimerAnswerThunk,
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
