import { SELECT_DATE } from '../actions/actions';

const initialState = {
  date: [],
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DATE:
      return {
        ...state,
        date: action.date,
      };
    default:
      return state;
  }
};

export default calendarReducer;
