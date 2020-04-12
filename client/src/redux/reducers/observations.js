import { FETCH_OBSERVATIONS, ADD_OBSERVATION } from '../actions/observations';

const initialState = {
  selectedObservation: null,
  observations: [],
};

// Updating store based on type of the action
const observationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OBSERVATION: {
      return {
        ...state,
        observations: [...state.observations, action.payload],
      };
    }
    case FETCH_OBSERVATIONS: {
      return {
        ...state,
        observations: action.observations,
      };
    }
    default:
      return state;
  }
};

export default observationsReducer;
