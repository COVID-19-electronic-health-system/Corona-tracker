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
import { setMoreToogle } from './navToggle';
import {
  setCompleted,
  setSurveyPage,
  setSurveyPage1,
  setSurveyPage2,
  setSurveyPage3,
  setSurveyPage4,
  clearSurvey,
  setReminderStatus,
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
import { resetQuizScore, setQuizScore, updateQuizScore } from './education';

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
  setReminderStatus,
  setDemographicsComorbiditiesThunk,
  fetchDemographicsComorbidities,
  resetDisclaimerAnswer,
  resetDemographicsComorbidities,
  deleteUserDataThunk,
  resetObservations,
  addObservationToStore,
  resetQuizScore,
  setQuizScore,
  updateQuizScore,
  setMoreToogle,
};

export default actions;
