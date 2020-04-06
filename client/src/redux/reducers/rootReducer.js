import { combineReducers } from 'redux';
import observationsReducer from './observations';
import loginLoading from './login';
import navigationReducer from './navigation';
import disclaimerReducer from './disclaimer';
import calendarReducer from './calendar';
import temperatureReducer from './temperature';
import healthToggleReducer from './healthToggle';

export default combineReducers({
  loginLoading,
  observationsReducer,
  navigationReducer,
  disclaimerReducer,
  calendarReducer,
  temperatureReducer,
  healthToggleReducer,
});
