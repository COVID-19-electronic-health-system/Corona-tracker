import { combineReducers } from 'redux';
import observations from './observations';
import loginLoading from './login';
import navigationReducer from './navigation';
import disclaimerReducer from './disclaimer';

// initial state of the Redux store
const initialState = {
  userId: null,
  errors: [],
  dataSample: {
    labels: ['2020-02-28', '2020-03-2', '2020-03-4', '2020-03-5', '2020-03-9'],
    values: [80, 70, 56, 90, 55],
  },
};

// Updating store based on type of the action
const root = (oldState = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...oldState,
        dataSample: action.dataSample,
      };
    default:
      return oldState;
  }
};

export default combineReducers({
  root,
  loginLoading,
  observations,
  navigationReducer,
  disclaimerReducer,
});
