import { DISCLAIMER_ANSWER, RESET_ANSWER } from '../actions/disclaimer';

const initialState = {
  answer: false,
};

const disclaimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCLAIMER_ANSWER:
      return {
        ...state,
        answer: action.answer,
      };
    case RESET_ANSWER:
      return {
        ...state,
        answer: false,
      };
    default:
      return state;
  }
};

export default disclaimerReducer;
