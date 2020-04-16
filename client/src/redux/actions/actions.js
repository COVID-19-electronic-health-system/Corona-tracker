/* eslint-disable import/no-cycle */

import {
  addObservation,
  deleteObservations,
  fetchObservations,
  resetObservations,
  addObservationToStore,
} from './observations';
import { setLoginLoading } from './login';
import { setNavbarSection } from './navigation';
import { setDisclaimerAnswerThunk, resetDisclaimerAnswer } from './disclaimer';
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
import { setDemographicsComorbiditiesThunk, resetDemographicsComorbidities } from './onboarding';
import { deleteUserDataThunk } from './deleteUserData';

const actions = {
  setLoginLoading,
  setNavbarSection,
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
  resetDisclaimerAnswer,
  resetDemographicsComorbidities,
  deleteUserDataThunk,
  resetObservations,
  addObservationToStore,
};

export default actions;
