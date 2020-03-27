import { SUBMIT_SURVEY } from '../constants'

const initialState = {
  isSubmited: null,
  data: {}
}

const submitSurveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SURVEY:
      return { isSubmited: true, data: { ...action.data } };
    default:
      return state;
  }
}

export default submitSurveyReducer;
