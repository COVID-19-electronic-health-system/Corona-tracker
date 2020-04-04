import { OBSERVATIONS_LOADED, NUM_OBSERVATIONS } from '../actions/observations';

const initialState = {
  numObservations: 0,
};

// Updating store based on type of the action
const observationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBSERVATIONS_LOADED:
      return action.observations;
    case NUM_OBSERVATIONS:
      return {
        ...state,
        numObservations: action.numObservations,
      };
    default:
      return state;
  }
};

export default observationsReducer;
