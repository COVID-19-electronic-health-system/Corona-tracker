import { 
  // OBSERVATIONS_LOADED, 
//   NUM_OBSERVATIONS, 
//   SET_OBSERVATIONS, 
  FETCH_OBSERVATIONS,
} from '../actions/observations';
import { ADD_OBSERVATION } from '../actions/observations'

const initialState = {
  numObservations: 0,
  observations: [],
};

// Updating store based on type of the action
const observationsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case OBSERVATIONS_LOADED:
    //   return action.observations;
    // case NUM_OBSERVATIONS:
    //   return {
    //     ...state,
    //     numObservations: action.numObservations,
    //   };
    case ADD_OBSERVATION: {
        return {
            ...state,
            observations: [...state.observations, action.payload]
        }
    }
    case FETCH_OBSERVATIONS: {
        return {
            ...state,
            observations: action.observations
        }
    }
    // case SET_OBSERVATIONS:
    //   return {
    //     ...state,
    //     observations: action.observations,
    //   };
    default:
      return state;
  }
};

export default observationsReducer;
