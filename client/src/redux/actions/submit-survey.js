import { SUBMIT_SURVEY } from '../constants';
import { getCheckboxButtonState } from './checkbox-button-survey';
import { getSymptomTrackerState } from './symptom-tracker'

export const submit = data => ({
  type: SUBMIT_SURVEY,
  data
})

// middleware to get survey state
export const submitSurvey = () => dispatch => {
  let data = { ...dispatch(getCheckboxButtonState()) };
  // data = { ...data, ...dispatch(getSymptomTrackerState()) };
  console.log('data', data)
  dispatch(submit(data))
}
