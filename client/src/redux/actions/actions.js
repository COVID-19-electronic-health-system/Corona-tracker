import { loadObservations, saveObservation, setNumObservations } from './observations';
import { setLoginLoading } from './login';
import { setNavbarSection } from './navigation';
import { setDisclaimerAnswerThunk } from './disclaimer';
import { selectDate } from './calendar';

const actions = {
  setLoginLoading,
  loadObservations,
  saveObservation,
  setNavbarSection,
  setNumObservations,
  setDisclaimerAnswerThunk,
  selectDate,
};

export default actions;
