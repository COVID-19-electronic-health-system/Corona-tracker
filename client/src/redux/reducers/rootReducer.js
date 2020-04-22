import { combineReducers } from 'redux';
import observationsReducer from './observations';
import loginLoading from './login';
import calendarReducer from './calendar';
import healthToggleReducer from './healthToggle';
import surveyReducer from './survey';
import onboardingReducer from './onboarding';

export default combineReducers({
  loginLoading,
  observationsReducer,
  calendarReducer,
  healthToggleReducer,
  surveyReducer,
  onboardingReducer,
});
