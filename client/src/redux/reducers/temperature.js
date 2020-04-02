export const LOAD_TEMPERATURE = 'LOAD_TEMPERATURE';

const initialState = {
  temperature: {
    labels: ['2020-02-28', '2020-03-2', '2020-03-4', '2020-03-5', '2020-03-9'],
    values: [80, 70, 56, 90, 55],
  },
};

// Updating store based on type of the action
const temperatureReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case LOAD_TEMPERATURE:
      return {
        ...oldState,
        temperature: action.temperature,
      };
    default:
      return oldState;
  }
};

export default temperatureReducer;
