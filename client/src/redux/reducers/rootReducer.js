import { combineReducers } from 'redux';
import observationsReducer from './observations';
import loginLoading from './login';
import navigationReducer from './navigation';
import disclaimerReducer from './disclaimer';
import calendarReducer from './calendar';
import temperatureReducer from './temperature';


export default combineReducers({
  loginLoading,
  observationsReducer,
  navigationReducer,
  disclaimerReducer,
  calendarReducer,
  temperatureReducer,
});
