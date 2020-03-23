import React, { useReducer } from 'react';
import SingleCheckboxButton from './SingleCheckboxButton';

// ACTION TYPES
const HANDLE_CHECKBOX_CHANGE = 'HANDLE_CHECKBOX_CHANGE';
const HANDLE_BUTTON_GROUP_CHANGE = 'HANDLE_BUTTON_GROUP_CHANGE';
const HANDLE_FEVER = 'HANDLE_FEVER';
const HANDLE_HOURS = 'HANDLE_HOURS';
const HANDLE_MINUTES = 'HANDLE_MINUTES';

// ACTION CREATORS
// checks if symptom is checked
const handleCheckboxChange = event => ({
  type: HANDLE_CHECKBOX_CHANGE,
  event,
});

// changes symptoms value
const handleButtonGroupChange = event => ({
  type: HANDLE_BUTTON_GROUP_CHANGE,
  event,
});

const handleFever = (event, value) => ({
  type: HANDLE_FEVER,
  event,
  value,
});

//Splited in two functions to handle time value
const handleHours = (event, value) => ({
  type: HANDLE_HOURS,
  event,
  value,
});

const handleMinutes = (event, value) => ({
  type: HANDLE_MINUTES,
  event,
  value,
});

// STATE
const initialState = {
  cough: { checked: false, value: 'Moderate' },
  fever: { checked: false, value: '' },
  dizziness: { checked: false, value: 'Moderate' },
  headache: { checked: false, value: '' },
  soreThroat: { checked: false, value: 'Moderate' },
  congestion: { checked: false, value: 'Moderate' },
};

// REDUCER
function reducer(state, action) {
  let symptomName, symptomChecked, symptomValue, value;
  switch (action.type) {
    case HANDLE_CHECKBOX_CHANGE:
      action.event.preventDefault();
      symptomName = action.event.target.name;
      symptomChecked = action.event.target.checked;
      return { ...state, [symptomName]: { ...state[symptomName], checked: symptomChecked } };

    case HANDLE_BUTTON_GROUP_CHANGE:
      action.event.preventDefault();
      symptomName = action.event.currentTarget.name;
      symptomValue = action.event.currentTarget.value;
      return { ...state, [symptomName]: { checked: true, value: symptomValue } };

    case HANDLE_FEVER:
      action.event.preventDefault();
      return { ...state, fever: { checked: true, value: action.value } };

    case HANDLE_HOURS:
      action.event.preventDefault();
      value = action.value;
      value = value ? value : '0';
      value = state['headache'].value ? state['headache'].value.replace(/\d*(?=:)/, value) : value + ':00';
      return { ...state, headache: { checked: true, value: value } };

    case HANDLE_MINUTES:
      action.event.preventDefault();
      value = action.value;
      value = value ? value : '00';
      value = state['headache'].value ? state['headache'].value.replace(/:.*/, ':' + value) : '0:' + value;
      return { ...state, headache: { checked: true, value: value } };
    default:
      return state;
  }
}
function CheckboxButton() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="checked-grouped-buttons">
      <h4>
        <b>Which symptoms are you feeling or experiencing?</b>
      </h4>
      {Object.entries(state).map(([symptomName, value], key) => (
        <SingleCheckboxButton
          key={key}
          symptomName={symptomName}
          symptomChecked={value.checked}
          symptomValue={value.value}
          handleCheckboxChange={event => dispatch(handleCheckboxChange(event))}
          handleButtonGroupChange={event => dispatch(handleButtonGroupChange(event))}
          handleFever={(event, value) => dispatch(handleFever(event, value))}
          handleHours={(event, value) => dispatch(handleHours(event, value))}
          handleMinutes={(event, value) => dispatch(handleMinutes(event, value))}
        />
      ))}
    </div>
  );
}

export default CheckboxButton;
