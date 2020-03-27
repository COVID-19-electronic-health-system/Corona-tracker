import { HANDLE_SLIDER, HANDLE_SYMPTOMS, HANDLE_ADDITIONAL_INFO, GET_SYMPTOM_TRACKER_STATE } from '../constants'

//ACTION CREATORS
export const handleSlider = (event, value) => ({
  type: HANDLE_SLIDER,
  event, value
})

export const handleSymptoms = event => ({
  type: HANDLE_SYMPTOMS,
  event
})

export const handlerAdditionalInfo = event => ({
  type: HANDLE_ADDITIONAL_INFO,
  event
})

export const getSymptomTrackerState = () => ({
  type: GET_SYMPTOM_TRACKER_STATE
})
