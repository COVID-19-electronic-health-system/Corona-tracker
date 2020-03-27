import { HANDLE_CHECKBOX_CHANGE, HANDLE_BUTTON_GROUP_CHANGE, HANDLE_FEVER, HANDLE_HOURS, HANDLE_MINUTES, GET_CHECKBOX_BUTTON_STATE } from '../constants'

// STATE
const initialState = {
  cough: { checked: false, value: 'Moderate' },
  fever: { checked: false, value: '' },
  dizziness: { checked: false, value: 'Moderate' },
  headache: { checked: false, value: '' },
  soreThroat: { checked: false, value: 'Moderate' },
  congestion: { checked: false, value: 'Moderate' }
};

// REDUCER
const checkboxButtonSurveyReducer = (state = initialState, action) => {
  let symptomName, symptomChecked, symptomValue, value;
  switch (action.type) {

    case HANDLE_CHECKBOX_CHANGE:
      symptomName = action.event.target.name;
      symptomChecked = action.event.target.checked;
      return { ...state, [symptomName]: { ...state[symptomName], checked: symptomChecked } };

    case HANDLE_BUTTON_GROUP_CHANGE:
      symptomName = action.event.currentTarget.name;
      symptomValue = action.event.currentTarget.value;
      return { ...state, [symptomName]: { checked: true, value: symptomValue } };

    case HANDLE_FEVER:
      return { ...state, fever: { checked: true, value: action.value } };

    case HANDLE_HOURS:
      value = action.value;
      value = value ? value : '0';
      value = state['headache'].value ? state['headache'].value.replace(/\d*(?=:)/, value) : value + ':00';
      return { ...state, headache: { checked: true, value: value } };

    case HANDLE_MINUTES:
      value = action.value;
      value = value ? value : '00';
      value = state['headache'].value ? state['headache'].value.replace(/:.*/, ':' + value) : '0:' + value;
      return { ...state, headache: { checked: true, value: value } };

    case GET_CHECKBOX_BUTTON_STATE:
      console.log('checkbox', state)
      return state;
    default:
      return state;
  }
}

export default checkboxButtonSurveyReducer;
