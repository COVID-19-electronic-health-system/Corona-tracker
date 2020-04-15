import { addObservation, deleteObservations, fetchObservations } from './observations';
import { setLoginLoading } from './login';
import { setNavbarSection } from './navigation';
import { setDisclaimerAnswerThunk } from './disclaimer';
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
import { setDemographicsComorbiditiesThunk } from './onboarding';

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
};

export default actions;
