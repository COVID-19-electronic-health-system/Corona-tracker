import { addObservation, fetchObservations } from './observations';
import { setLoginLoading } from './login';
import { setNavbarSection } from './navigation';
import { setDisclaimerAnswerThunk } from './disclaimer';
import { selectDate } from './calendar';
import { setToggleValue, setDetailData } from './healthToggle';
import { setSurveyPage1, setSurveyPage2, setSurveyPage3, toSurveyPage1, toSurveyPage2, clearSurvey } from './survey';
import { setDemographicsComorbiditiesThunk } from './onboarding';

const actions = {
  setLoginLoading,
  setNavbarSection,
  fetchObservations,
  addObservation,
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
};

export default actions;
