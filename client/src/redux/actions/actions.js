import { setNumObservations, setObservations } from './observations';
import { setLoginLoading } from './login';
import { setNavbarSection } from './navigation';
import { setDisclaimerAnswerThunk } from './disclaimer';
import { selectDate } from './calendar';
import { setToggleValue, setDetailData } from './healthToggle';

const actions = {
  setLoginLoading,
  setNavbarSection,
  setNumObservations,
  setObservations,
  setDisclaimerAnswerThunk,
  selectDate,
  setToggleValue,
  setDetailData,
};

export default actions;
