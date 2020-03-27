import { HANDLE_SLIDER, HANDLE_SYMPTOMS, HANDLE_ADDITIONAL_INFO } from '../constants'

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

