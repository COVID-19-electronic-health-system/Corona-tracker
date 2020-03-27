import { SUBMIT_SURVEY } from '../constants';

export const submit = data => ({
  type: SUBMIT_SURVEY,
  data
})

// middleware to get survey state
export const submitSurvey = () => (dispatch, getState) => {
  let data = { ...getState().symptomTrackerReducer, ...getState().checkboxButtonSurveyReducer };
  dispatch(submit(data))
}
