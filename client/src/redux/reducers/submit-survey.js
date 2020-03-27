import { SUBMIT_SURVEY } from '../constants'

const initialState = {
  isSubmited: false,
  data: {}
}

const submitSurveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SURVEY:
      console.log('submitted', action.data)
      return { isSubmited: true, data: action.data };
    default:
      return state;
  }
}

export default submitSurveyReducer;
