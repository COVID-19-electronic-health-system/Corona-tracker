import { DISCLAIMER_ANSWER } from './../actions/actions';

const initialState = {
  answer: null,
};

const disclaimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCLAIMER_ANSWER:
      return {
        ...state,
        answer: action.answer,
      };
    default:
      return state;
  }
};

export default disclaimerReducer;
