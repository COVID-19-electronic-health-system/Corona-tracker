import { CHECKUPS_LOADED } from '../actions/actions';
import Observation from '../../models/observation';

// initial state of the Redux store
const initialState = {
  userId: null,
  errors: [],
  dataSample: [
    new Observation({ physical: { temperature: 80 } }),
    new Observation({ physical: { temperature: 70 } }),
    new Observation({ physical: { temperature: 56 } }),
    new Observation({ physical: { temperature: 90 } }),
    new Observation({ physical: { temperature: 55 } }),
  ],
};

// Updating store based on type of the action
const rootReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case CHECKUPS_LOADED:
      return {
        ...oldState,
        dataSample: {
          labels: action.checkups.map(checkup => checkup.attrs.date.toLocaleDateString('en-US')),
          values: action.checkups.map(checkup => checkup.attrs.temperature),
        },
      };
    default:
      return oldState;
  }
};

export default rootReducer;
