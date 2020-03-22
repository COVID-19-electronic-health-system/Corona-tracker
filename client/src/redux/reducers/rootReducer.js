import { CHECKUPS_LOADED } from '../actions/actions';

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
