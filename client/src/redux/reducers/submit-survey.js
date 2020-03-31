export const SUBMIT_SURVEY = 'SUBMIT_SURVEY';

const initialState = {
  isSubmitted: null,
};

const submitSurveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SURVEY:
      return { isSubmitted: true };
    default:
      return state;
  }
};

export default submitSurveyReducer;
