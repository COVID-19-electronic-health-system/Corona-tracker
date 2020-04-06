import { setNumObservations, setObservations } from './observations';
import { setLoginLoading } from './login';
import { setNavbarSection } from './navigation';
import { setDisclaimerAnswerThunk } from './disclaimer';
import { selectDate } from './calendar';
import { setToggleValue, setDetailData } from './healthToggle';
import { setSurveyPage1, setSurveyPage2, setSurveyPage3 } from './survey';

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
};

export default actions;
