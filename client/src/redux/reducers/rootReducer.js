import observations from './observations';
import { combineReducers } from 'redux';

// initial state of the Redux store
const initialState = {
  userId: null,
  errors: [],
};

// Updating store based on type of the action
const root = (oldState = initialState, action) => {
  switch (action.type) {
    default:
      return oldState;
  }
};

export default combineReducers({
  root,
  observations,
});
