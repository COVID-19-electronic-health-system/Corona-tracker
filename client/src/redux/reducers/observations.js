import Observation from '../../models/observation';
import { OBSERVATIONS_LOADED } from '../actions/observations';

const initialState = [
  new Observation({ physical: { temperature: 80 } }),
  new Observation({ physical: { temperature: 70 } }),
  new Observation({ physical: { temperature: 56 } }),
  new Observation({ physical: { temperature: 90 } }),
  new Observation({ physical: { temperature: 55 } }),
];

// Updating store based on type of the action
const observationsReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case OBSERVATIONS_LOADED:
      return action.observations;
    default:
      return oldState;
  }
};

export default observationsReducer;
