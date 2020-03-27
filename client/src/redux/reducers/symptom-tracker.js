import { HANDLE_SLIDER, HANDLE_SYMPTOMS, HANDLE_ADDITIONAL_INFO, GET_SYMPTOM_TRACKER_STATE } from '../constants'

// STATE
const initialState = {
  todayFeeling: 5,
  todaySymptoms: 5,
  comparedFeeling: 'The Same',
  additionalInfo: ''
}

// REDUCER
const symptomTrackerReducer = (state = initialState, action) => {
  let name;
  switch (action.type) {

    case HANDLE_SLIDER:
      name = action.event.target.title;
      return { ...state, [name]: action.value }

    case HANDLE_SYMPTOMS:
      name = action.event.currentTarget.value;
      return { ...state, comparedFeeling: name }

    case HANDLE_ADDITIONAL_INFO:
      let value = action.event.target.value;
      return { ...state, additionalInfo: value }

    case GET_SYMPTOM_TRACKER_STATE:
      console.log('symptom', state)
      return state;
    default: return state;
  }
}

export default symptomTrackerReducer;
