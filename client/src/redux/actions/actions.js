import { setNumObservations, setObservations, fetchObservations } from './observations';
import { setLoginLoading } from './login';
import { setNavbarSection } from './navigation';
import { setDisclaimerAnswerThunk } from './disclaimer';
import { selectDate } from './calendar';
import { setToggleValue, setDetailData } from './healthToggle';
import { setSurveyPage1, setSurveyPage2, setSurveyPage3, toSurveyPage1, toSurveyPage2, clearSurvey } from './survey';
import { setDemographicsComorbiditiesThunk } from './onboarding';
import { submitSurveyThunk } from './submit-survey';

const actions = {
  setLoginLoading,
  setNavbarSection,
  setNumObservations,
  setObservations,
  setDisclaimerAnswerThunk,
  selectDate,
  setToggleValue,
  setDetailData,
  setSurveyPage1,
  setSurveyPage2,
  setSurveyPage3,
  toSurveyPage1,
  toSurveyPage2,
  clearSurvey,
  setDemographicsComorbiditiesThunk,
  submitSurveyThunk,
  fetchObservations,
};

export default actions;
