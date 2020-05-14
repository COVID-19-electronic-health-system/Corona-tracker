import { combineReducers } from 'redux';
import observationsReducer from './observations';
import calendarReducer from './calendar';
import healthToggleReducer from './healthToggle';
import surveyReducer from './survey';
import { onboardingReducer } from './onboarding';
import educationReducer from './education';

export default combineReducers({
  observationsReducer,
  calendarReducer,
  healthToggleReducer,
  surveyReducer,
  onboardingReducer,
  educationReducer,
});
